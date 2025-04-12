"use server";

import { v2 as cloudinary } from "cloudinary";

// Define the CloudinaryImage type for TypeScript
export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

// Define the shape of Cloudinary resource objects
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  [key: string]: string | number | boolean | undefined; // For other potential properties
}

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Fetch images from the Cloudinary 'figata-cafe' folder
 */
export async function getGalleryImages(): Promise<CloudinaryImage[]> {
  try {
    // Search for images in the figata-cafe folder
    const result = await cloudinary.search
      .expression("folder:figata-cafe")
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    // Return the resources array
    return result.resources.map((resource: CloudinaryResource) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
    }));
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return [];
  }
}
