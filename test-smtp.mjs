// Quick SMTP diagnostic script — tries both port 465 and 587
import nodemailer from "nodemailer";

const pass = "hM2@&h?/X?2";

const configs = [
  {
    label: "Port 465 (SSL)",
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: { user: "admin@teksys-services.com", pass },
    tls: { rejectUnauthorized: false },
  },
  {
    label: "Port 587 (STARTTLS)",
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: { user: "admin@teksys-services.com", pass },
    tls: { rejectUnauthorized: false },
  },
];

for (const { label, ...config } of configs) {
  console.log(`\n=== Testing: ${label} ===`);
  console.log("Pass:", JSON.stringify(config.auth.pass), "length:", config.auth.pass.length);
  const transporter = nodemailer.createTransport(config);
  try {
    await transporter.verify();
    console.log("✅ SUCCESS — connection verified!");
    
    // Try sending
    const info = await transporter.sendMail({
      from: "admin@teksys-services.com",
      to: "admin@teksys-services.com",
      subject: "SMTP Test — TEKSYS Registration System",
      html: "<h2>SMTP Test Successful</h2><p>If you see this email, the SMTP configuration is working correctly.</p>",
    });
    console.log("✅ Email sent! Message ID:", info.messageId);
    break;
  } catch (err) {
    console.error(`❌ FAILED: ${err.message}`);
    console.error(`   Code: ${err.code}, Response: ${err.response}`);
  }
}
