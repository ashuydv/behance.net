import { NextApiRequest, NextApiResponse } from "next";
// import clientPromise from "../../lib/dbConnect";
import { ObjectId } from "mongodb";
import prisma from "@/lib/db";

// Define the User interface
interface User {
  _id?: ObjectId;
  name: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const client = await clientPromise;
  // const db = client.db();
  // const collection = db.collection<User>('users');
  const collection = await prisma.user.findMany();

  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    case "POST":
      return handlePost(req, res);
    case "PUT":
      return handlePut(req, res);
    case "DELETE":
      return handleDelete(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// GET - Retrieve all users or a single user
async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse,
//   collection: any
) {
  const { id } = req.query;
  if (id) {
    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    return res.status(200).json(user);
  } else {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }
}

// POST - Create a new user
async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse,
//   collection: any
) {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const result = await prisma.user.create({
    data: {
      name,
      email,
      username: name,
    },
  });

  if (!result)
    return res.status(400).json({ error: "Failed to create a User" });

  return res.status(201).json({ _id: result.id, name, email });
}

// PUT - Update a user
async function handlePut(
  req: NextApiRequest,
  res: NextApiResponse,
//   collection: any
) {
  const { id } = req.query;
  const { name, email } = req.body;

  if (!id) return res.status(400).json({ error: "User ID is required" });
  if (!name && !email)
    return res
      .status(400)
      .json({ error: "At least one field to update is required" });

  const checkUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      name: true,
    },
  });

  if (!checkUser || checkUser.name !== name) {
    return res.status(400).json({ error: "User not found" });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: String(id),
    },
    data: {
      name,
      email,
    },
  });

  if (!updatedUser)
    return res.status(400).json({ error: "Failed to update the User" });

  //   const result = await collection.updateOne(
  //     { _id: new ObjectId(id as string) },
  //     { $set: { ...(name && { name }), ...(email && { email }) } }
  //   );

  //   if (result.matchedCount === 0)
  //     return res.status(404).json({ error: "User not found" });

  return res.status(200).json({ message: "User updated successfully" });
}

// DELETE - Delete a user
async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse,
//   collection: any
) {
  const { id } = req.query;

  if (!id) return res.status(400).json({ error: "User ID is required" });

  const user = await prisma.user.findUnique({
    where: {
      id: String(id),
    },
  });

  if (!user) return res.status(404).json({ error: "User not found" });

  const deletedUser = await prisma.user.delete({
    where: {
      id: String(id),
    },
  });

  if (!deletedUser)
    return res.status(400).json({ error: "Failed to delete the User" });

//   const result = await collection.deleteOne({
//     _id: new ObjectId(id as string),
//   });

//   if (result.deletedCount === 0)
//     return res.status(404).json({ error: "User not found" });
  return res.status(200).json({ message: "User deleted successfully" });
}
