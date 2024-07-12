import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function signToken(user: IUser): string {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string): { id: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string };
  } catch (error) {
    return null;
  }
}