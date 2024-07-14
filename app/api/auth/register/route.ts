import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { firstName, lastName, username, email, password, bio } = await request.json();

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Combine firstName and lastName to create the name field
        const name = `${firstName} ${lastName}`.trim();

        const user = new User({ username, email, password, name, bio });
        await user.save();

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error("Registration error", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}