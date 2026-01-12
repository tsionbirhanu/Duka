import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const services = await prisma.serviceCategory.findMany({
    include: {
      features: true,
      packages: {
        include: {
          featureValues: {
            include: {
              feature: true,
            },
          },
        },
      },
    },
  });

  const formatted = services.map(service => ({
    id: service.id,
    name: service.name,
    description: service.description,
    features: service.features.map(f => ({
      id: f.id,
      name: f.name,
    })),
    packages: service.packages.map(pkg => ({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      currency: pkg.currency,
      turnaroundDays: pkg.turnaroundDays,
      features: pkg.featureValues.map(fv => ({
        featureId: fv.featureId,
        name: fv.feature.name,
        value: fv.value,
      })),
    })),
  }));

  return NextResponse.json(formatted);
}

export async function POST(req: Request) {
  const body = await req.json();

  const service = await prisma.serviceCategory.create({
    data: {
      name: body.name,
      description: body.description,
    },
  });

  return NextResponse.json(service, { status: 201 });
}