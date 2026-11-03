import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const body = await req.json();
    if (body.website) return NextResponse.json({ ok: true });
    const name = String(body.name || "").trim(),
      email = String(body.email || "").trim(),
      details = String(body.details || "").trim();
    if (
      name.length < 1 ||
      name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      details.length < 10 ||
      details.length > 5000
    )
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    return NextResponse.json({
      ok: true,
      message:
        "Validated. Configure an email or CRM provider to deliver inquiries.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
