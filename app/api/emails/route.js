import { connectDb } from "@/lib/config/db";
import Email from "@/lib/model/emailModel";
import { NextResponse } from "next/server";

await connectDb();

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get("email");
  await Email.create({ email });

  return NextResponse.json({ success: true, message: "Email subscribed!" });
}

export async function GET() {
  const emails = await Email.find();

  return NextResponse.json({ emails });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "email deleted" });
}
