import prisma from "./db";

export async function checkUser(id: string) {
  if (!id) return false;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return false;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
