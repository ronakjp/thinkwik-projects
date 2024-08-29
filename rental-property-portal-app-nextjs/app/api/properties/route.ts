import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/database";
import Property from "@/models/Property";

import { getSessionUser } from "@/utils/getSessionUser";
import { uploadImages } from "@/utils/uploadImages";
import extractFormData from "@/utils/extractFormData";

//GET /api/properties
export const GET = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectDB();

    const properties = await Property.find({});
    return new NextResponse(JSON.stringify(properties), { status: 200 });
  } catch (err) {
    console.log("Error in GET REQ it is ", err);
    return new NextResponse("Something went wrong", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    // Get the session user and check if they are authenticated
    const sessionUser = await getSessionUser();

    if (!sessionUser?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Connect to the database
    await connectDB();

    const userId = sessionUser.user.id;

    // Parse form data from the request
    const formData = await request.formData();

    const imgFiles = formData.getAll("propsImages[]") as FormDataEntryValue[];

    // Upload images and get the URLs
    const uploadedImageUrls = await uploadImages(imgFiles);

    // Construct the property data object

    const newPropertyObject = await extractFormData(
      formData,
      userId,
      uploadedImageUrls
    );

    const newlyInsertedPropertyID = newPropertyObject._id.toString();
    // const redirectUrl = `${process.env.NEXTAUTH_URL}/properties/${newlyInsertedPropertyID}`;

    // console.log("Redirect URL:", redirectUrl);
    return new NextResponse(
      JSON.stringify({ newPropertyID: newlyInsertedPropertyID }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return new NextResponse(
      JSON.stringify({ message: "POST Request Failed", error: error.message }),
      { status: 500 }
    );
  }
};
