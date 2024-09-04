import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { TypeProperty } from "@/types/types";
import editFormDataWithoutImage from "@/utils/editFormDataWithoutImage";

//GET /api/properties/[id]
type ParamsType = { params: { id: string } };

export const GET = async (
  request: NextRequest,
  { params }: ParamsType
): Promise<NextResponse> => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new NextResponse("Property Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(property), { status: 200 });
  } catch (err) {
    console.log("Error in GET REQ it is ", err);

    return new NextResponse("Something went wrong", { status: 500 });
  }
};
//DELETE /api/properties/[id]
export const DELETE = async (
  request: NextRequest,
  { params }: ParamsType
): Promise<NextResponse> => {
  try {
    await connectDB();

    const propertyId = params.id;
    const sessionUser = await getSessionUser();

    console.log("propertyId ", propertyId);
    if (!sessionUser || !sessionUser.user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { user } = sessionUser;

    const property: TypeProperty = await Property.findById(propertyId);

    if (!property) {
      return new NextResponse("Property Not Found", { status: 404 });
    }

    //verify ownership

    console.log("found property ", property);

    if (property.owner.toString() !== user.id) {
      console.log("inside ");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const res = await Property.deleteOne({ _id: propertyId });

    if (res.deletedCount) {
      return new NextResponse(JSON.stringify("property deleted successfully"), {
        status: 200,
      });
    } else {
      return new NextResponse(JSON.stringify("property not found"), {
        status: 404,
      });
    }
  } catch (err) {
    console.log("Error in GET REQ it is ", err);

    return new NextResponse("Something went wrong", { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (request: NextRequest, { params }) => {
  try {
    // Get the session user and check if they are authenticated
    const sessionUser = await getSessionUser();

    if (!sessionUser?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Connect to the database
    await connectDB();

    const { id } = params;
    const userId = sessionUser.user.id;

    // Parse form data from the request
    const formData = await request.formData();

    const existingProperty = await Property.findById(id);

    if (!existingProperty) {
      return new NextResponse("Property does not exist", { status: 404 });
    }

    //verifying ownership
    if (existingProperty.owner.toString() !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    } else {
      // Update the property data object
      return await editFormDataWithoutImage(id, formData);
    }
  } catch (error) {
    console.error("Error processing PUT request:", error);
    return new NextResponse(
      JSON.stringify({ message: "PUT Request Failed", error: error.message }),
      { status: 500 }
    );
  }
};
