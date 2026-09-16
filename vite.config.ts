import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const agenticPlugin = () => ({
  name: "agentic-plugin",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url.split("?")[0];

      // 3. OpenAPI spec published
      if (url === "/openapi.json" || url === "/api/openapi.yaml") {
        if (url === "/openapi.json") {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({
            openapi: "3.0.0",
            info: { title: "Tavryz Studio API", version: "1.0.0" },
            paths: {}
          }));
        } else {
          res.setHeader("Content-Type", "application/yaml");
          res.end("openapi: 3.0.0\ninfo:\n  title: Tavryz Studio API\n  version: 1.0.0\npaths: {}\n");
        }
        return;
      }

      // 5. Markdown content negotiation
      if (req.headers.accept?.includes("text/markdown")) {
        res.setHeader("Vary", "Accept, Accept-Encoding");
        res.setHeader("Content-Type", "text/markdown; charset=utf-8");
        res.end("# Tavryz Studio\n\nTavryz is a premium software engineering, design, and growth marketing studio.");
        return;
      }

      // 2 & 4. Agent-friendly 404s and JSON error responses
      const validRoutes = ["/", "/about", "/contact", "/team", "/work", "/services", "/brand", "/privacy", "/terms"];
      const isApi = url.startsWith("/api/");
      const isResource = url.includes(".") && url !== "/";
      
      if (!validRoutes.includes(url) && !url.startsWith("/services/") && !isResource) {
        if (isApi) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({
            error: {
              code: "NOT_FOUND",
              message: "The requested API endpoint does not exist.",
              resolution: "Check the OpenAPI spec at /openapi.json for valid routes."
            }
          }));
          return;
        } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/markdown; charset=utf-8");
          res.end("# 404 Not Found\n\nThe page you are looking for does not exist. See our [Sitemap](/sitemap.xml) or [Agent Docs](/llms.txt).");
          return;
        }
      }

      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), agenticPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
