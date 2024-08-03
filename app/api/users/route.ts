// import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    // await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("page") || "10");

    const users = await User.find({})
      .select("-password")
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await User.countDocuments();

    return NextResponse.json(
      {
        users,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
