import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { handleRegistrationAPI } from "./src/lib/registration.api";
import { handleContactAPI } from "./src/lib/contact.api";
import { IncomingMessage, ServerResponse } from "node:http";

const apiPlugin = () => ({
  name: "api-plugin",
  configureServer(server: any) {
    server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: Function) => {
      if ((req.url === "/api/registration" || req.url === "/api/contact") && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const webRequest = new Request("http://localhost:3000" + req.url, {
              method: req.method,
              headers: req.headers as any,
              body: body || null,
            });
            const response = req.url === "/api/contact" 
              ? await handleContactAPI(webRequest)
              : await handleRegistrationAPI(webRequest);
              
            res.statusCode = response.status;
            response.headers.forEach((value, key) => {
              res.setHeader(key, value);
            });
            const resBody = await response.text();
            res.end(resBody);
          } catch (e) {
            console.error("API error:", e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Internal Error" }));
          }
        });
        return;
      }
      next();
    });
  },
});

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  
  return {
    plugins: [react(), tsconfigPaths(), tailwindcss(), apiPlugin()],
    server: {
      port: 3000,
      host: true,
    },
  };
});
