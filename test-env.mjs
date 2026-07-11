import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "");
console.log("=== VITE LOADENV TEST ===");
console.log("SMTP_HOST:", env.SMTP_HOST);
console.log("SMTP_PORT:", env.SMTP_PORT);
console.log("SMTP_USER:", env.SMTP_USER);
console.log("SMTP_PASS:", env.SMTP_PASS);
console.log("Length of pass:", env.SMTP_PASS ? env.SMTP_PASS.length : 0);
console.log("Is it exactly correct?", env.SMTP_PASS === "hM2@&h?/X?2");
