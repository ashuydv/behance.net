import { NextApiResponse } from 'next';
import authMiddleware, { AuthenticatedRequest } from '../../middleware/auth';

const handler = (req: AuthenticatedRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is a protected route', userId: req.userId });
};

export default authMiddleware(handler);