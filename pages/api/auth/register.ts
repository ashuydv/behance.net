import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '../../../utils/dbConnect';
import dbConnect from '@/lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Received registration request:', req.body);
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  console.log("1");

  await dbConnect();
  console.log("2");

  const { username, email, password } = req.body;
  console.log("3");

  try {
    console.log("8");
    // const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    console.log("4");
    const existingUser = null;
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    console.log("5");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    console.log("6");
    console.log(newUser);
    await newUser.save();
    console.log("7");

    const token = signToken(newUser);
    console.log("8");
    res.status(201).json({ token, user: { id: newUser._id, username: newUser.username, email: newUser.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: (error as Error).message });
  }
}