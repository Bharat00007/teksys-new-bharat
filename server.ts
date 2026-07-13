import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { handleRegistrationAPI } from "./src/lib/registration.api.js";
import { handleContactAPI } from "./src/lib/contact.api.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFiles = [
  path.join(__dirname, ".env"),
  path.join(__dirname, ".env.production"),
];
for (const envFile of envFiles) {
  if (fs.existsSync(envFile)) {
    const envResult = dotenv.config({ path: envFile, override: false });
    if (envResult.error) {
      console.warn(`⚠️  Failed to load env from ${envFile}:`, envResult.error.message || envResult.error);
    } else {
      console.log(`[SERVER] Loaded env file: ${envFile}`);
    }
  }
}

console.log("[SERVER] Runtime environment:", {
  nodeVersion: process.versions.node,
  platform: process.platform,
  fetch: typeof fetch,
  Request: typeof Request,
  Headers: typeof Headers,
  NODE_ENV: process.env.NODE_ENV,
});

console.log("[SERVER] Process environment keys:", {
  SMTP_HOST: !!process.env.SMTP_HOST,
  SMTP_SERVER: !!process.env.SMTP_SERVER,
  SMTP_PORT: !!process.env.SMTP_PORT,
  SMTP_USER: !!process.env.SMTP_USER,
  SMTP_PASS: !!process.env.SMTP_PASS,
  EMAIL_ADDRESS: !!process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
  ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
  VITE_API_URL: process.env.VITE_API_URL,
});

console.log("[SERVER] Loaded SMTP env:", {
  SMTP_HOST: !!process.env.SMTP_HOST,
  SMTP_SERVER: !!process.env.SMTP_SERVER,
  SMTP_PORT: !!process.env.SMTP_PORT,
  SMTP_USER: !!process.env.SMTP_USER,
  EMAIL_ADDRESS: !!process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
});

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    console.log(`[SERVER] API request ${req.method} ${req.originalUrl}`);
    if (req.method === "POST") {
      console.log("[SERVER] API request body:", JSON.stringify(req.body));
    }
    res.type("application/json");
  }
  next();
});

// Helper function to bridge Express Request to Web Request
function createWebRequest(req: express.Request) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(v => headers.append(key, v));
      } else {
        headers.append(key, value as string);
      }
    }
  }

  return new Request("http://localhost" + req.url, {
    method: req.method,
    headers: headers,
    body: req.method === "POST" ? JSON.stringify(req.body) : undefined
  });
}

// API Routes
app.post("/api/registration", async (req, res) => {
  try {
    const webRequest = createWebRequest(req);
    const response = await handleRegistrationAPI(webRequest);
    const body = await response.text();
    res.status(response.status).type('application/json').send(body);
  } catch (error) {
    console.error("Registration API error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const webRequest = createWebRequest(req);
    const response = await handleContactAPI(webRequest);
    const body = await response.text();
    res.status(response.status).type('application/json').send(body);
  } catch (error) {
    console.error("Contact API error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    runtime: {
      nodeVersion: process.versions.node,
      platform: process.platform,
      fetch: typeof fetch,
      Request: typeof Request,
      Headers: typeof Headers,
    },
    env: {
      VITE_API_URL: process.env.VITE_API_URL || "/api",
      smtpServer: !!(process.env.SMTP_HOST || process.env.SMTP_SERVER),
      smtpUser: !!(process.env.SMTP_USER || process.env.EMAIL_ADDRESS),
      smtpPassword: !!(process.env.SMTP_PASS || process.env.EMAIL_PASSWORD),
      adminEmail: !!process.env.ADMIN_EMAIL,
    },
  });
});

app.all(/^\/api\/.*$/, (req, res) => {
  res.status(404).json({ success: false, message: "API route not found" });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("[SERVER] Unhandled error:", err);
  if (req.path.startsWith("/api")) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
  next(err);
});

// Serve static files from dist directory
const distPath = path.join(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // Handle SPA routing by serving index.html for all non-API routes
  app.use((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  console.warn("⚠️  dist directory not found. Run 'npm run build' to generate static assets.");
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Production server listening on port ${PORT}`);
});
