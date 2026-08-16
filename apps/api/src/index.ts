import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "system-v-api",
  });
});

export default app;