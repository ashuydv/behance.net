import { auth } from "@/auth";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

export async function getUser() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const token = jwt.sign(session.user, process.env.AUTH_SECRET as string);
  const decoded = jwt.verify(
    token,
    process.env.AUTH_SECRET as string
  ) as jwt.JwtPayload;

  if (!decoded || !decoded.sub) {
    throw new Error("Unauthorized");
  }

  const { sub: id } = decoded;
  console.log("User ID: ", id);

  return id;
}
