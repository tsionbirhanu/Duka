import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder API route - not currently using database
  return NextResponse.json([]);
}

export async function POST() {
  // Placeholder API route - not currently using database
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
