import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { TypeProperty } from "@/types/types";

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
