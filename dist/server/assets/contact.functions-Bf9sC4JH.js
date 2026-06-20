import { f as TSS_SERVER_FUNCTION, r as createServerFn } from "./esm-B50dUWcE.js";
import { z } from "zod";
import nodemailer from "nodemailer";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/mailer.ts
var transporter = null;
function getTransporter() {
	if (transporter) return transporter;
	const smtpServer = process.env.SMTP_SERVER;
	const smtpPort = process.env.SMTP_PORT;
	const emailAddress = process.env.EMAIL_ADDRESS;
	const emailPassword = process.env.EMAIL_PASSWORD;
	if (!smtpServer || !smtpPort || !emailAddress || !emailPassword) throw new Error("SMTP configuration missing. Please set SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, and EMAIL_PASSWORD environment variables.");
	transporter = nodemailer.createTransport({
		host: smtpServer,
		port: parseInt(smtpPort, 10),
		secure: false,
		auth: {
			user: emailAddress,
			pass: emailPassword
		}
	});
	return transporter;
}
async function sendEmail(options) {
	try {
		await getTransporter().sendMail({
			from: process.env.EMAIL_ADDRESS || "noreply@teksys-services.com",
			to: options.to,
			subject: options.subject,
			html: options.html,
			replyTo: options.replyTo
		});
		return true;
	} catch (error) {
		console.error("Email send failed:", error);
		return false;
	}
}
//#endregion
//#region src/lib/contact.functions.ts?tss-serverfn-split
var ContactSchema = z.object({
	name: z.string().trim().min(2, "Please enter your name").max(120),
	email: z.string().trim().email("Invalid email").max(200),
	phone: z.string().trim().max(40).optional().or(z.literal("")),
	company: z.string().trim().max(160).optional().or(z.literal("")),
	subject: z.string().trim().max(160).optional().or(z.literal("")),
	topic: z.string().trim().max(200).optional().or(z.literal("")),
	message: z.string().trim().min(2, "Please add a short message").max(4e3),
	source: z.enum([
		"contact",
		"enroll",
		"service"
	]).default("contact")
});
function esc(s) {
	return s.replace(/[&<>"']/g, (c) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[c]);
}
var sendContact_createServerFn_handler = createServerRpc({
	id: "477541d8a127a17e097220e080486dcdf7627a71b3b207de22820846bc8e528c",
	name: "sendContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => sendContact.__executeServer(opts));
var sendContact = createServerFn({ method: "POST" }).validator((data) => data).handler(sendContact_createServerFn_handler, async ({ data }) => {
	const parsed = ContactSchema.safeParse(data);
	if (!parsed.success) return {
		ok: false,
		error: parsed.error.issues[0]?.message || "Please check the form and try again."
	};
	const submission = parsed.data;
	const admin = process.env.ADMIN_EMAIL || "admin@teksys-services.com";
	process.env.EMAIL_ADDRESS;
	if (!process.env.SMTP_SERVER || !process.env.SMTP_PORT || !process.env.EMAIL_PASSWORD) return {
		ok: false,
		error: "Email service is not configured. Please contact admin@teksys-services.com directly."
	};
	const sourceLabel = submission.source === "enroll" ? "Course Enrolment" : submission.source === "service" ? "Service Enquiry" : "Contact Form";
	const adminHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0">New ${esc(sourceLabel)} submission — TEKSYS</h2>
        <table style="width:100%;border-collapse:collapse" cellpadding="8">
          <tr><td><b>Name</b></td><td>${esc(submission.name)}</td></tr>
          <tr><td><b>Email</b></td><td>${esc(submission.email)}</td></tr>
          ${submission.phone ? `<tr><td><b>Phone</b></td><td>${esc(submission.phone)}</td></tr>` : ""}
          ${submission.company ? `<tr><td><b>Company</b></td><td>${esc(submission.company)}</td></tr>` : ""}
          ${submission.topic ? `<tr><td><b>Topic</b></td><td>${esc(submission.topic)}</td></tr>` : ""}
          ${submission.subject ? `<tr><td><b>Subject</b></td><td>${esc(submission.subject)}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px">Message</h3>
        <p style="white-space:pre-wrap;background:#f5f6ff;padding:14px;border-radius:8px">${esc(submission.message)}</p>
      </div>`;
	const userHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0">Thanks for reaching out to TEKSYS</h2>
        <p>Hi ${esc(submission.name)},</p>
        <p>We've received your ${esc(sourceLabel.toLowerCase())} and our team will get back to you within 1–2 business days.</p>
        <p><b>Your message</b></p>
        <p style="white-space:pre-wrap;background:#f5f6ff;padding:14px;border-radius:8px">${esc(submission.message)}</p>
        <p>Warm regards,<br/>TEKSYS Services</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="font-size:12px;color:#777">Teksys Services Pvt. Ltd. · India · Singapore · USA</p>
      </div>`;
	if (!await sendEmail({
		to: admin,
		subject: `[TEKSYS] ${sourceLabel}: ${submission.subject || submission.topic || submission.name}`,
		html: adminHtml,
		replyTo: submission.email
	})) return {
		ok: false,
		error: "Email failed to send. Please email admin@teksys-services.com directly."
	};
	try {
		await sendEmail({
			to: submission.email,
			subject: "We've received your message — TEKSYS",
			html: userHtml
		});
	} catch (error) {
		console.error("Failed to send user confirmation:", error);
	}
	return { ok: true };
});
//#endregion
export { sendContact_createServerFn_handler };
