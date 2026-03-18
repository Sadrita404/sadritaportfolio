import { NextResponse } from "next/server";

// Resend email integration removed.
// This endpoint is intentionally disabled to avoid requiring an API key.

export async function POST() {
  return NextResponse.json({ error: "Email sending is disabled." }, { status: 404 });
}
