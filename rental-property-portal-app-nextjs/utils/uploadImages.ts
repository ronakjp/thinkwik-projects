import cloudinary from "@/config/cloudinary";

export const uploadImages = async (
  imgFiles: FormDataEntryValue[]
): Promise<string[]> => {
  if (!imgFiles || imgFiles.length === 0) {
    throw new Error("No Files Found.");
  }

  const imagesUploadPromises = imgFiles.map(async (file) => {
    try {
      if (!(file instanceof File)) {
        throw new Error("Invalid file type.");
      }

      const bytes = await file.arrayBuffer();
      const base64 = Buffer.from(bytes).toString("base64");
      const mimeType = file.type; // Use the correct MIME type
      const result = await cloudinary.uploader.upload(
        `data:${mimeType};base64,${base64}`,
        { folder: "PropertyHubProject" }
      );
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null; // Return null or handle the error as needed
    }
  });

  try {
    const uploadedImages = await Promise.all(imagesUploadPromises);
    // Filter out any null values in case of upload failures
    return uploadedImages.filter((url) => url !== null) as string[];
  } catch (error) {
    console.error("Error in image upload process:", error);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};
