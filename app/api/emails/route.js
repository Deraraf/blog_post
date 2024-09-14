import { connectDb } from "@/lib/config/db";
import Email from "@/lib/model/emailModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDb();
    const emails = await Email.find();
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return NextResponse.json({
      success: false,
      message: "Error fetching emails",
    });
  }
}

export async function POST(request) {
  try {
    await connectDb();
    const formData = await request.formData();
    const email = formData.get("email");
    await Email.create({ email });

    return NextResponse.json({ success: true, message: "Email subscribed!" });
  } catch (error) {
    console.error("Error posting email:", error);
    return NextResponse.json({
      success: false,
      message: "Error subscribing email",
    });
  }
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "email deleted" });
}
