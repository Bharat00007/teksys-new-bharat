/* eslint-disable prettier/prettier */
import nodemailer from "nodemailer";

type MailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

type SendResult = {
  success: boolean;
  error?: string;
};

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const smtpServer = (process.env.SMTP_HOST || process.env.SMTP_SERVER || "").trim();
  const smtpPort = (process.env.SMTP_PORT || "").trim();
  const emailAddress = (process.env.SMTP_USER || process.env.EMAIL_ADDRESS || "").trim();
  const emailPassword = (process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || "").trim();
  const isSecure = process.env.SMTP_SECURE === "true" || parseInt(smtpPort || "", 10) === 465;

  console.log("[MAILER] SMTP values at runtime:", {
    smtpServer: smtpServer || "<missing>",
    smtpPort: smtpPort || "<missing>",
    emailAddress: emailAddress || "<missing>",
    emailPassword: emailPassword ? `SET (${emailPassword.length})` : "<missing>",
    isSecure,
  });

  if (!smtpServer || !smtpPort || !emailAddress || !emailPassword) {
    throw new Error("SMTP configuration missing.");
  }

  transporter = nodemailer.createTransport({
    host: smtpServer,
    port: parseInt(smtpPort, 10),
    secure: isSecure,
    auth: {
      user: emailAddress,
      pass: emailPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
}

export async function sendEmail(options: MailOptions): Promise<SendResult> {
  try {
    const t = getTransporter();
    const rawFrom = process.env.SMTP_USER || process.env.EMAIL_ADDRESS || "noreply@teksys-services.com";
    const fromAddress = `"TEKSYS Registration" <${rawFrom}>`;

    const info = await t.sendMail({
      from: fromAddress,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
    });

    console.log("[MAILER] ✅ Email sent successfully. MessageId:", info.messageId);
    return { success: true };
  } catch (error: any) {
    // Invalidate cached transporter on auth failures so next attempt recreates it
    if (error?.code === "EAUTH" || error?.code === "ESOCKET" || error?.code === "ECONNECTION") {
      transporter = null;
    }

    const errorMessage = error?.message || "Unknown email error";
    const errorCode = error?.code || "UNKNOWN";
    const errorResponse = error?.response || "";

    console.error("[MAILER] ❌ Email send FAILED:");
    console.error("  Code:", errorCode);
    console.error("  Message:", errorMessage);
    console.error("  SMTP Response:", errorResponse);
    console.error("  Full Error:", error);

    return {
      success: false,
      error: `SMTP Error (${errorCode}): ${errorMessage}`,
    };
  }
}

export async function verifySmtpConnection(): Promise<boolean> {
  try {
    const t = getTransporter();
    await t.verify();
    console.log("[MAILER] ✅ SMTP connection verified");
    return true;
  } catch (error: any) {
    transporter = null;
    console.error("[MAILER] ❌ SMTP verification failed:", error?.message);
    return false;
  }
}
