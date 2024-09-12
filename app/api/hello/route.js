import { NextResponse } from "next/server";

export async function GET(request) {
  const url = request.nextUrl;
  const searchParams = url.searchParams;
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  console.log("Query Parameters:", { name, age });

  const response = NextResponse.json(`hello ${name}`);
  response.cookies.set("username", name, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24,
  });
  return response;
}
