"use server";

import prisma from "@/lib/db";
import { getUser } from "@/lib/getUserId";
import { ProjectType } from "@prisma/client";

export async function getAllProjects(userId?: string) {
  try {
    // const session = await auth();
    // if (!session?.user) {
    //   throw new Error("Unauthorized");
    // }
    // const token = jwt.sign(session.user, process.env.AUTH_SECRET as string);
    // const decoded = jwt.verify(
    //   token,
    //   process.env.AUTH_SECRET as string
    // ) as jwt.JwtPayload;

    // if (!decoded || !decoded.sub) {
    //   throw new Error("Unauthorized");
    // }
    const verifyUser = await getUser();
    if (!verifyUser) {
      throw new Error("Unauthorized");
    }

    if (userId) {
      const projects = await prisma.project.findMany({
        where: {
          userId,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      return {
        data: [...projects],
        status: 200,
        success: true,
        message: "Projects fetched successfully",
      };
    }

    const response = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (response.length === 0) {
      return {
        data: [],
        status: 404,
        success: false,
        message: "No projects found",
      };
    }

    return {
      data: [...response],
      status: 200,
      success: true,
      message: "Projects fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
}

export async function getProjectById(id: string) {
  try {
    const userId = await getUser();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!project) {
      return {
        status: 404,
        success: false,
        message: "Project not found",
      };
    }

    return {
      status: 200,
      success: true,
      data: { ...project },
      message: "Project fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
}

export async function uploadProject(values: any) {
  try {
    const userId = await getUser();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    if (!values.title || !values.description || !values.type) {
      return {
        status: 400,
        success: false,
        message: "Please provide all the required fields",
      };
    }

    if (values.type === ProjectType.VIDEO && !values.videoUrl) {
      return {
        status: 400,
        success: false,
        message: "Please provide video url",
      };
    }

    if (values.type === ProjectType.BLOG && !values.content) {
      return {
        status: 400,
        success: false,
        message: "Please provide content",
      };
    }

    if (values.type === ProjectType.BLOG && !values.content) {
      return {
        status: 400,
        success: false,
        message: "Please provide content",
      };
    }

    if (values.type === ProjectType.IMAGE && !values.images) {
      return {
        status: 400,
        success: false,
        message: "Please provide images",
      };
    }

    const project = await prisma.project.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
        title: values.title,
        description: values.description,
        type: values.type,
        content: values.type === ProjectType.BLOG ? values.content : "",
        videoUrl: values.type === ProjectType.VIDEO ? values.videoUrl : "",
        images: values.type === ProjectType.IMAGE ? values.images : [""],
        tags: {
          connectOrCreate: values?.tags.map((tag: any) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        categories: {
          connectOrCreate: values?.categories.map((category: any) => ({
            where: { name: category },
            create: { name: category },
          })),
        },
      },
    });

    if (!project) {
      return {
        status: 400,
        success: false,
        message: "Error creating project",
      };
    }

    return {
      status: 201,
      success: true,
      message: "Project created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
}

export async function updateProject(values: any, id: string) {
  try {
    const userId = await getUser();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const project = await prisma.project.update({
      where: {
        id,
      },
      data: values,
    });

    if (!project) {
      return {
        status: 400,
        success: false,
        message: "Error updating project",
      };
    }

    return {
      status: 200,
      success: true,
      message: "Project updated successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
}

export async function deleteProject(id: string) {
  try {
    const userId = await getUser();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const project = await prisma.project.delete({
      where: {
        id,
      },
    });

    if (!project) {
      return {
        status: 404,
        success: false,
        message: "Project not found",
      };
    }

    return {
      status: 200,
      success: true,
      message: "Project deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
}
