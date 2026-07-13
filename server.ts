import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { handleRegistrationAPI } from "./src/lib/registration.api.js";
import { handleContactAPI } from "./src/lib/contact.api.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

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
    res.status(500).json({ error: "Internal Server Error" });
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
    res.status(500).json({ error: "Internal Server Error" });
  }
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
