import { NextResponse } from "next/server";
import Blog from "@/lib/model/BlogModel";
import { connectDb } from "@/lib/config/db";
import fs from "fs";

await connectDb();

export async function GET(_request, { params }) {
  const { id } = params;
  const blog = await Blog.findById({ _id: id });
  return NextResponse.json({ blog });
}

export async function DELETE(_request, { params }) {
  const id = params.id;
  const blog = await Blog.findById(id);
  await Blog.findByIdAndDelete(id);
  fs.unlink(`./public${blog.image}`, () => {});

  return NextResponse.json({ message: "blog deleted successfully" });
}
