import "./lib/error-capture";
import { handleRegistrationAPI } from "./lib/registration.api";
import { handleDiagnosticsAPI } from "./lib/diagnostics.api";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Handle CORS Preflight for API routes
      if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          }
        });
      }

      // Diagnostics endpoint (protected by DIAG_KEY env) for integrated SMTP checks
      if (request.method === "POST" && url.pathname === "/api/diagnostics/smtp") {
        try {
          const res = await handleDiagnosticsAPI(request);
          const headers = new Headers(res.headers);
          headers.set("Access-Control-Allow-Origin", "*");
          return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
        } catch (err: any) {
          console.error('[SERVER] Uncaught error in /api/diagnostics/smtp handler:', err);
          return new Response(JSON.stringify({ success: false, message: err?.message || 'Internal server error' }), {
            status: 500,
            headers: { 
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
          });
        }
      }

      if (request.method === "POST" && url.pathname === "/api/registration") {
        try {
          const res = await handleRegistrationAPI(request);
          const headers = new Headers(res.headers);
          headers.set("Access-Control-Allow-Origin", "*");
          return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
        } catch (err: any) {
          console.error('[SERVER] Uncaught error in /api/registration handler:', err);
          return new Response(JSON.stringify({ success: false, message: err?.message || 'Internal server error' }), {
            status: 500,
            headers: { 
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
          });
        }
      }
      
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
