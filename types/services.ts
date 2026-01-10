// Type definitions for the GET /api/services endpoint
// Based on the API documentation

export interface Feature {
  id: number;
  name: string;
}

export interface PackageFeature {
  featureId: number;
  name: string;
  value: any; // JSON value (string | number | boolean)
}

export interface Package {
  id: number;
  name: string;
  price: number;
  currency: string;
  turnaroundDays: number | null;
  features: PackageFeature[];
}

export interface ServiceCategory {
  id: number;
  name: string;
  description: string | null;
  features: Feature[];
  packages: Package[];
}

export type ServicesResponse = ServiceCategory[];
