import { auth } from "@/auth";
import { checkUser } from "@/lib/checkUser";
import prisma from "@/lib/db";
import { ProjectType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isValid = await checkUser(session.user.id);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    //TODO : user's query [based on time or type]
    const projects = await prisma.project.findMany({
      where: {
        userId: session.user.id,
      },
    });

    if (projects.length === 0) {
      return NextResponse.json({ error: "No projects found" }, { status: 404 });
    }

    return NextResponse.json({ data: projects }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
