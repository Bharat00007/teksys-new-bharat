import { verifySmtpConnection, sendEmail } from "./mailer";

type Resp = { success: boolean; message?: string; details?: any };

export async function handleDiagnosticsAPI(request: Request): Promise<Response> {
  try {
    // Basic protection: require a header key that matches DIAG_KEY env var
    const requiredKey = process.env.DIAG_KEY;
    if (requiredKey) {
      const provided = request.headers.get("x-diag-key") || "";
      if (!provided || provided !== requiredKey) {
        return new Response(JSON.stringify({ success: false, message: "Unauthorized" } as Resp), {
          status: 401,
          headers: { "content-type": "application/json" },
        });
      }
    }

    const body = request.method === "POST" ? await request.json().catch(() => ({})) : {};
    const doSendTestMail = Boolean(body?.sendTest);

    const smtpOk = await verifySmtpConnection();

    const result: Resp = { success: true, message: "Diagnostics completed", details: { smtpVerified: smtpOk } };

    if (doSendTestMail) {
      const to = process.env.ADMIN_EMAIL || process.env.SMTP_USER || "admin@teksys-services.com";
      const sendRes = await sendEmail({
        to,
        subject: "SMTP Diagnostics Test Message",
        html: `<p>This is a diagnostics test message from TEKSYS app.</p>`,
        text: `This is a diagnostics test message from TEKSYS app.`,
      });

      result.details = { ...result.details, sendTestMail: sendRes };
      if (!sendRes.success) result.success = false;
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err: any) {
    console.error("[DIAGNOSTICS API] Error:", err);
    return new Response(JSON.stringify({ success: false, message: err?.message || "Diagnostics failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
