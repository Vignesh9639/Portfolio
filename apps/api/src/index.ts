import { cors } from "hono/cors";
import { Hono } from "hono";

const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "http://localhost:3000",
  }),
);

app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "system-v-api",
  });
});

export default app;