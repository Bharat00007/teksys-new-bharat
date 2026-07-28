import { z } from "zod";
import { sendEmail } from "./mailer";

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(120, "Name must be 120 characters or fewer"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(2, "Message must be at least 2 characters"),
}).strict();

export type ContactPayload = z.infer<typeof ContactSchema>;
export type ContactResponse = { ok: true } | { ok: false; error: string };

const jsonHeaders = { "Content-Type": "application/json" };

function json(body: ContactResponse, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function escapeHtml(value: string | undefined): string {
  return (value || "").replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderAdminEmail(data: ContactPayload): string {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Company", data.company || "Not provided"],
    ["Subject", data.subject || "Not provided"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
      <h2>New contact form submission</h2>
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:8px;border:1px solid #ddd;font-weight:700">${escapeHtml(label)}</td>
                  <td style="padding:8px;border:1px solid #ddd">${escapeHtml(value)}</td>
                </tr>`,
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="margin-top:24px">Message</h3>
      <div style="white-space:pre-wrap;padding:16px;border-left:4px solid #2a18b0;background:#f6f6f8">${escapeHtml(data.message)}</div>
    </div>`;
}

function renderAutoReply(data: ContactPayload): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
      <h2>Thank you for contacting TEKSYS</h2>
      <p>Hi ${escapeHtml(data.name)},</p>
      <p>We have received your message and will respond within 1–2 business days.</p>
      <h3>Your message</h3>
      <div style="white-space:pre-wrap;padding:16px;border-left:4px solid #2a18b0;background:#f6f6f8">${escapeHtml(data.message)}</div>
      <p>Regards,<br />TEKSYS Team</p>
    </div>`;
}

function hasRequiredSmtpConfig(): boolean {
  return Boolean(
    process.env.SMTP_SERVER?.trim() &&
      process.env.SMTP_PORT?.trim() &&
      process.env.EMAIL_PASSWORD?.trim(),
  );
}

export async function handleContactAPI(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed." }, 405);
  }

  try {
    const payload: unknown = await request.json();
    const parsed = ContactSchema.safeParse(payload);

    if (!parsed.success) {
      return json(
        { ok: false, error: parsed.error.issues[0]?.message || "Invalid form data." },
        400,
      );
    }

    const data = parsed.data;
    if (!hasRequiredSmtpConfig()) {
      return json({ ok: false, error: "Email service is not configured." }, 500);
    }

    const senderAddress = process.env.EMAIL_ADDRESS || process.env.SMTP_USER;
    const adminResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || senderAddress || "",
      subject: `New contact form submission from ${data.name}`,
      html: renderAdminEmail(data),
      replyTo: data.email,
    });

    if (!adminResult.success) {
      return json({ ok: false, error: "Email failed to send." }, 500);
    }

    try {
      await sendEmail({
        to: data.email,
        subject: "We received your message",
        html: renderAutoReply(data),
      });
    } catch {
      // The user's confirmation email must not affect a successful submission.
    }

    return json({ ok: true }, 200);
  } catch (error: any) {
    console.error("[CONTACT API] Unhandled error:", error);
    return json({ ok: false, error: "Unable to process your message." }, 500);
  }
}
