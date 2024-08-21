import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/database";
export const GET = async (request: NextRequest): Promise<NextResponse> => {
  try {
    console.log("REquest is ", request);

    await connectDB();
    return new NextResponse("Hello World", { status: 200 });
  } catch (err) {
    console.log("Error in GET REQ it is ", err);

    return new NextResponse("Something went wrong", { status: 500 });
  }
};
