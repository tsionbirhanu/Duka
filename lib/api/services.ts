import { ServicesResponse } from "@/types/services";

/**
 * Fetch all services from the API
 * Server-side function for Next.js Server Components
 *
 * @example
 * const services = await getServices();
 */
export async function getServices(): Promise<ServicesResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/services`, {
    cache: "no-store", // Always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}
