import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/database";
import Property from "@/models/Property";

//GET /api/properties/[id]
type ParamsType = { params: { id: string } };

export const GET = async (
  request: NextRequest,
  { params }: ParamsType
): Promise<NextResponse> => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    console.log("Server side data fetched ", property);

    if (!property) {
      return new NextResponse("Property Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(property), { status: 200 });
  } catch (err) {
    console.log("Error in GET REQ it is ", err);

    return new NextResponse("Something went wrong", { status: 500 });
  }
};
