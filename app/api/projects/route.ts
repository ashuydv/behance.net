import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { auth } from "@/auth";
import { writeFile } from "fs/promises";
import path from "path";
import { checkUser } from "@/lib/checkUser";
import prisma from "@/lib/db";
import { ProjectType } from "@prisma/client";

// GET all projects [Query]
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (userId) {
      const isValid = await checkUser(userId);
      if (!isValid) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const projects = await prisma.project.findMany({
        where: {
          userId,
        },
      });

      if (projects.length === 0) {
        return NextResponse.json(
          { error: "No projects found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ data: projects }, { status: 200 });
    }

    const projects = await prisma.project.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      }, // TODO : Reduce the payload according to need
    });

    if (projects.length === 0) {
      return NextResponse.json({ error: "No projects found" }, { status: 404 });
    }

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST a new project
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const isValid = await checkUser(session.user.id);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    if (body.type === ProjectType.BLOG && !body.content) {
      return NextResponse.json(
        { error: "Content is required for blog" },
        { status: 400 }
      );
    }

    if (body.type === ProjectType.VIDEO && !body.videoUrl) {
      return NextResponse.json(
        { error: "Video URL is required for video" },
        { status: 400 }
      );
    }

    if (body.type === ProjectType.IMAGE && !body.images) {
      return NextResponse.json(
        { error: "Images are required for image project" },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        User: {
          connect: {
            id: session.user.id,
          },
        },
        type: body.type,
        content: body.type === ProjectType.BLOG ? body.content : null,
        videoUrl: body.type === ProjectType.VIDEO ? body.videoUrl : null,
        images: body.type === ProjectType.IMAGE ? body.images : null,
        tags: {
          connectOrCreate: body.tags.map((tag: any) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        categories: {
          connectOrCreate: body.categories.map((category: any) => ({
            where: { name: category },
            create: { name: category },
          })),
        },
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Failed to create a project" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Project created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT a project
export async function PUT(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isValid = await checkUser(session.user.id);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }

    const body = await request.json();
    const project = await prisma.project.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: body,
    });

    if (!project) {
      return NextResponse.json(
        { error: "Failed to update the project" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Project updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE a project
export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isValid = await checkUser(session.user.id);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }

    const project = await prisma.project.delete({
      where: {
        id,
        userId: session.user.id,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
