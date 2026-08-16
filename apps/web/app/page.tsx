import { getHealth } from "@/lib/api";

export default async function Home() {
  const health = await getHealth();

  return (
    <main>
      <h1>SYSTEM//V</h1>

      <p>API Status: {health.status}</p>

      <p>Service: {health.service}</p>
    </main>
  );
}