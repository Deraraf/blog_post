import { connectDb } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import Blog from "@/lib/model/BlogModel";

await connectDb();

export async function GET(request) {
  const blogs = await Blog.find();
  return NextResponse.json({ blogs, message: "API working" });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) {
      return NextResponse.json(
        { success: false, message: "No image provided" },
        { status: 400 }
      );
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;

    // Ensure the path exists
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      catagory: `${formData.get("catagory")}`,
      author: `${formData.get("author")}`,
      image: `${imgUrl}`,
      author_image: `${formData.get("author_image")}`,
    };

    await Blog.create(blogData);
    console.log("Blog saved successfully");

    return NextResponse.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
