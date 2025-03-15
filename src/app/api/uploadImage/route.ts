import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract file and other form data
    const file = formData.get("image") as File | null;

    let imgUrl = null;
    if (file) {
      // Convert file to base64
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

      // Upload to Cloudinary with resource_type: "auto"
      const uploadResponse = await cloudinary.uploader.upload(base64File, {
        folder: "image-vibe",
        resource_type: "auto",
      });
      imgUrl = uploadResponse.secure_url;
    }

    return NextResponse.json(
      { message: "Image uploaded successfully", url: imgUrl },
      { status: 200 }
    );

    
  } catch (error) {
    console.error("Error Uploading Image:", error);
    return NextResponse.json(
      { message: "Failed to upload image" },
      { status: 500 }
    );
  }
}
