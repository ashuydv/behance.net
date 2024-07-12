import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../utils/auth';

export interface AuthenticatedRequest extends NextApiRequest {
  userId?: string;
}

type Handler = (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void> | void;

export default function authMiddleware(handler: Handler) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.id;
    return handler(req, res);
  };
}