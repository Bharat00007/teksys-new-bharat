import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { sendEmail } from "./mailer";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  topic: z.string().trim().optional(),
  message: z.string().trim().min(5, "Message must be at least 5 characters"),
  source: z.string().optional()
});

function esc(s: string) {
  if (!s) return "";
  const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return s.replace(/[&<>"']/g, (c) => map[c] || c);
}

const DATA_DIR = process.env.FAILED_CONTACT_DIR ? path.resolve(process.cwd(), process.env.FAILED_CONTACT_DIR) : path.resolve(process.cwd(), "data");
const FAILED_CONTACT_FILE = path.join(DATA_DIR, "failed-contacts.json");

async function persistFailedContact(entry: any) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let list: any[] = [];
    try {
      const txt = await fs.readFile(FAILED_CONTACT_FILE, "utf-8");
      list = JSON.parse(txt || "[]");
    } catch (e) {
      list = [];
    }
    list.push(entry);
    await fs.writeFile(FAILED_CONTACT_FILE, JSON.stringify(list, null, 2), "utf-8");
    console.log("[CONTACT API] Persisted failed contact to", FAILED_CONTACT_FILE);
  } catch (err) {
    console.error("[CONTACT API] Failed to persist contact:", err);
  }
}

export async function handleContactAPI(request: Request): Promise<Response> {
  console.log("\n[CONTACT API] ====== Incoming request ======");

  try {
    const body = await request.json();
    console.log("[CONTACT API] Parsed body keys:", Object.keys(body));

    const parsed = ContactSchema.safeParse(body.data);

    if (!parsed.success) {
      const errorMsg = parsed.error.issues[0]?.message || "Invalid form data";
      console.error("[CONTACT API] Validation failed:", errorMsg);
      return new Response(JSON.stringify({ success: false, message: errorMsg }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = parsed.data;
    const admin = process.env.ADMIN_EMAIL || "admin@teksys-services.com";
    console.log("[CONTACT API] Sending to admin:", admin);

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse" cellpadding="8">
          <tr><td style="width:160px;"><b>Name:</b></td><td>${esc(data.name)}</td></tr>
          <tr><td><b>Email:</b></td><td>${esc(data.email)}</td></tr>
          <tr><td><b>Phone:</b></td><td>${data.phone ? esc(data.phone) : "N/A"}</td></tr>
          <tr><td><b>Company/Institute:</b></td><td>${data.company ? esc(data.company) : "N/A"}</td></tr>
          <tr><td><b>Subject:</b></td><td>${data.subject ? esc(data.subject) : "N/A"}</td></tr>
          <tr><td><b>Topic:</b></td><td>${data.topic ? esc(data.topic) : "N/A"}</td></tr>
          <tr><td><b>Source:</b></td><td>${data.source ? esc(data.source) : "N/A"}</td></tr>
        </table>
        
        <h3 style="margin-top:24px; color:#2a18b0; border-bottom: 1px solid #eee; padding-bottom: 8px;">Message</h3>
        <p style="white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px; border: 1px solid #e5e7eb;">${esc(data.message)}</p>
      </div>
    `;

    const textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Company/Institute: ${data.company || "N/A"}
Subject: ${data.subject || "N/A"}
Topic: ${data.topic || "N/A"}
Source: ${data.source || "N/A"}

Message:
${data.message}
`;

    const result = await sendEmail({
      to: admin,
      subject: `New Contact Form Submission from ${data.name}`,
      html: html,
      text: textContent,
      replyTo: data.email,
    });

    if (!result.success) {
      console.error("[CONTACT API] Email sending failed:", result.error);
      await persistFailedContact({ timestamp: new Date().toISOString(), data, error: result.error });
      return new Response(JSON.stringify({
        success: true,
        message: "Message submitted successfully. Our team will follow up shortly."
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log("[CONTACT API] Contact processed successfully");
    return new Response(JSON.stringify({
      success: true,
      message: "Message sent successfully."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error("[CONTACT API] Unhandled error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error?.message || "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
