import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { firstName, lastName, username, email, password, bio } = body;

    if (!firstName || !lastName || !username || !email || !password) {
      return new NextResponse("Please provide all required fields", {
        status: 400,
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const name = `${firstName} ${lastName}`.trim();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        hashedPassword,
        bio,
      },
    });

    if (!user) {
      return new NextResponse("Registration failed", { status: 500 });
    }

    return new NextResponse("User registered successfully", { status: 201 });
  } catch (error) {
    console.error("Registration error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";
// import User from "@/models/User";

// export async function POST(request: Request) {
//   await dbConnect();

//   try {
//     const { firstName, lastName, username, email, password, bio } =
//       await request.json();

//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Combine firstName and lastName to create the name field
//     const name = `${firstName} ${lastName}`.trim();

//     const user = new User({ username, email, password, name, bio });
//     await user.save();

//     return NextResponse.json(
//       { message: "User registered successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Registration error", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
