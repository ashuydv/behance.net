import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/dbConnect';
import { ObjectId } from 'mongodb';

// Define the User interface
interface User {
    _id?: ObjectId;
    name: string;
    email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const client = await clientPromise;
    // const db = client.db();
    // const collection = db.collection<User>('users');

    // switch (req.method) {
    //     case 'GET':
    //         return handleGet(req, res, collection);
    //     case 'POST':
    //         return handlePost(req, res, collection);
    //     case 'PUT':
    //         return handlePut(req, res, collection);
    //     case 'DELETE':
    //         return handleDelete(req, res, collection);
    //     default:
    //         res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    //         res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}

// GET - Retrieve all users or a single user
async function handleGet(req: NextApiRequest, res: NextApiResponse, collection: any) {
    const { id } = req.query;

    if (id) {
        const user = await collection.findOne({ _id: new ObjectId(id as string) });
        if (!user) return res.status(404).json({ error: 'User not found' });
        return res.status(200).json(user);
    } else {
        const users = await collection.find({}).toArray();
        return res.status(200).json(users);
    }
}

// POST - Create a new user
async function handlePost(req: NextApiRequest, res: NextApiResponse, collection: any) {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

    const result = await collection.insertOne({ name, email });
    return res.status(201).json({ _id: result.insertedId, name, email });
}

// PUT - Update a user
async function handlePut(req: NextApiRequest, res: NextApiResponse, collection: any) {
    const { id } = req.query;
    const { name, email } = req.body;

    if (!id) return res.status(400).json({ error: 'User ID is required' });
    if (!name && !email) return res.status(400).json({ error: 'At least one field to update is required' });

    const result = await collection.updateOne(
        { _id: new ObjectId(id as string) },
        { $set: { ...(name && { name }), ...(email && { email }) } }
    );

    if (result.matchedCount === 0) return res.status(404).json({ error: 'User not found' });
    return res.status(200).json({ message: 'User updated successfully' });
}

// DELETE - Delete a user
async function handleDelete(req: NextApiRequest, res: NextApiResponse, collection: any) {
    const { id } = req.query;

    if (!id) return res.status(400).json({ error: 'User ID is required' });

    const result = await collection.deleteOne({ _id: new ObjectId(id as string) });

    if (result.deletedCount === 0) return res.status(404).json({ error: 'User not found' });
    return res.status(200).json({ message: 'User deleted successfully' });
}