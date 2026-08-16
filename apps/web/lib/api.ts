const API_URL = "http://localhost:8787";

export interface HealthResponse {
  status: string;
  service: string;
}

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/api/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}