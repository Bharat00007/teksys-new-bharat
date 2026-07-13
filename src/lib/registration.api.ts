import { z } from "zod";
import { sendEmail } from "./mailer";
import { promises as fs } from "fs";
import path from "path";

const RegistrationSchema = z.object({
  whoAreYou: z.enum(["Student", "Faculty", "Organization"], { required_error: "Please select who you are" }),
  name: z.string().trim().min(2, "Please enter your name"),
  institution: z.string().trim().min(2, "Please enter your institution name"),
  department: z.string().trim().min(2, "Please enter your department"),
  year: z.string().trim().optional().or(z.literal("")),
  contactNumber: z.string().trim().regex(/^\d{10,15}$/, "Contact number must be 10-15 digits"),
  email: z.string().trim().email("Invalid email address"),
  modules: z.record(z.string(), z.array(z.string())),
  remarks: z.string().trim().optional(),
  mou: z.enum(["yes", "no"]).default("yes"),
});

function esc(s: string) {
  if (!s) return "";
  return s.replace(/[&<>\"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

const DATA_DIR = process.env.FAILED_REG_DIR ? path.resolve(process.cwd(), process.env.FAILED_REG_DIR) : path.resolve(process.cwd(), "data");
const FAILED_FILE = path.join(DATA_DIR, "failed-registrations.json");

async function persistFailedRegistration(entry: any) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let list: any[] = [];
    try {
      const txt = await fs.readFile(FAILED_FILE, "utf-8");
      list = JSON.parse(txt || "[]");
    } catch (e) {
      list = [];
    }
    list.push(entry);
    await fs.writeFile(FAILED_FILE, JSON.stringify(list, null, 2), "utf-8");
    console.log("[REGISTRATION API] Persisted failed registration to", FAILED_FILE);
  } catch (err) {
    console.error("[REGISTRATION API] Failed to persist registration:", err);
  }
}

export async function handleRegistrationAPI(request: Request): Promise<Response> {
  console.log("\n[REGISTRATION API] ====== Incoming request ======");
  
  try {
    const body = await request.json();
    console.log("[REGISTRATION API] Parsed body keys:", Object.keys(body));
    console.log("[REGISTRATION API] Data keys:", body.data ? Object.keys(body.data) : "NO DATA KEY");
    
    const parsed = RegistrationSchema.safeParse(body.data);
    
    if (!parsed.success) {
      const errorMsg = parsed.error.issues[0]?.message || "Invalid form data";
      console.error("[REGISTRATION API] Validation failed:", errorMsg);
      console.error("[REGISTRATION API] All issues:", JSON.stringify(parsed.error.issues, null, 2));
      return new Response(JSON.stringify({ success: false, message: errorMsg }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = parsed.data;
    const admin = process.env.ADMIN_EMAIL || "admin@teksys-services.com";
    console.log("[REGISTRATION API] Sending to admin:", admin);

    // Check env vars are loaded
    console.log("[REGISTRATION API] ENV check:");
    console.log("  SMTP_HOST:", process.env.SMTP_HOST || "(not set)");
    console.log("  SMTP_PORT:", process.env.SMTP_PORT || "(not set)");
    console.log("  SMTP_USER:", process.env.SMTP_USER || "(not set)");
    console.log("  SMTP_PASS:", process.env.SMTP_PASS ? `[SET, ${process.env.SMTP_PASS.length} chars]` : "(not set)");
    console.log("  ADMIN_EMAIL:", process.env.ADMIN_EMAIL || "(not set)");

    const formatCategoryName = (cat: string) => {
      const map: Record<string, string> = {
        foundation: "Foundation",
        gan: "GaN",
        sic: "SiC",
        rf: "RF & Microwave",
        sensors: "Sensors & Transducers",
        power: "Power Electronics",
        materials: "Materials Science",
        advanced: "Advanced Semiconductor Systems"
      };
      return map[cat] || cat;
    };

    const modulesHtml = Object.entries(data.modules).map(([category, selected]) => {
      if (!selected || selected.length === 0) return "";
      return `
        <div style="margin-bottom: 12px;">
          <h4 style="margin-bottom: 4px; color:#333;">Selected ${formatCategoryName(category)} Modules:</h4>
          <ul style="margin-top: 0; padding-left: 20px;">
            ${selected.map(m => `<li>${esc(m)}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join("");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Semiconductor Skill Training Program Registration</h2>
        <table style="width:100%;border-collapse:collapse" cellpadding="8">
          <tr><td style="width:160px;"><b>Who are you:</b></td><td>${esc(data.whoAreYou)}</td></tr>
          <tr><td><b>Name:</b></td><td>${esc(data.name)}</td></tr>
          <tr><td><b>Institution Name:</b></td><td>${esc(data.institution)}</td></tr>
          <tr><td><b>Department:</b></td><td>${esc(data.department)}</td></tr>
          <tr><td><b>Current Year:</b></td><td>${data.year ? esc(data.year) : ""}</td></tr>
          <tr><td><b>Contact Number:</b></td><td>${esc(data.contactNumber)}</td></tr>
          <tr><td><b>Email Address:</b></td><td>${esc(data.email)}</td></tr>
          <tr><td><b>Interested to get the MOU:</b></td><td>${esc(data.mou)}</td></tr>
        </table>
        
        <h3 style="margin-top:24px; color:#2a18b0; border-bottom: 1px solid #eee; padding-bottom: 8px;">Selected Modules</h3>
        <div style="background:#f9fafb;padding:16px;border-radius:8px; border: 1px solid #e5e7eb;">
          ${modulesHtml || "<p>No modules selected.</p>"}
        </div>

        <h3 style="margin-top:24px; color:#2a18b0; border-bottom: 1px solid #eee; padding-bottom: 8px;">Remarks</h3>
        <p style="white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px; border: 1px solid #e5e7eb;">${data.remarks ? esc(data.remarks) : "No remarks."}</p>
      </div>
    `;

    const textContent = `
New Semiconductor Skill Training Program Registration

Who are you: ${data.whoAreYou}
Name: ${data.name}
Institution Name: ${data.institution}
Department: ${data.department}
Current Year: ${data.year || "N/A"}
Contact Number: ${data.contactNumber}
Email Address: ${data.email}
Interested to get the MOU: ${data.mou}

Remarks: ${data.remarks || "No remarks."}
`;

    const result = await sendEmail({
      to: admin,
      subject: "New Semiconductor Skill Training Program Registration",
      html: html,
      text: textContent,
      replyTo: data.email,
    });

    if (!result.success) {
      console.error("[REGISTRATION API] ❌ Email sending failed:", result.error);
      // persist registration so we don't lose it
      try {
        await persistFailedRegistration({ timestamp: new Date().toISOString(), data, error: result.error });
      } catch (e) {
        console.error('[REGISTRATION API] Persist failed registration error:', e);
      }
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Registration submitted successfully. Our team will follow up shortly."
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log("[REGISTRATION API] ✅ Registration processed successfully");
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Registration submitted successfully." 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error("[REGISTRATION API] ❌ Unhandled error:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: error?.message || "Internal server error" 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
