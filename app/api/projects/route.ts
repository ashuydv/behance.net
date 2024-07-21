import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { auth } from "@/auth";
import { writeFile } from "fs/promises";
import path from "path";

// GET all projects or a single project
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const project = await Project.findById(id).populate(
        "creator",
        "name email"
      );
      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(project);
    } else {
      const projects = await Project.find().populate("creator", "name email");
      return NextResponse.json(projects);
    }
  } catch (error) {
    console.error("Error fetching project(s):", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST a new project
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    const file = formData.get("file") as File | null;

    let filePath = "";
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name}`;
      filePath = path.join(process.cwd(), "public", "uploads", fileName);
      await writeFile(filePath, buffer);
      filePath = `/uploads/${fileName}`;
    }

    const project = new Project({
      title,
      description,
      type,
      creator: session.user.id,
      ...(filePath && { filePath }),
    });

    await project.save();
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
// PUT (update) a project
export async function PUT(request: NextRequest) {
  try {
    await dbConnect();
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const project = await Project.findOneAndUpdate(
      { _id: id, creator: session.user.id },
      body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return NextResponse.json(
        { error: "Project not found or you are not the creator" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE a project
export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await Project.findOneAndDelete({
      _id: id,
      creator: session.user.id,
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found or you are not the creator" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
