// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cached = global as any;

// if (!cached) {
//   cached.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(process.env.MONGODB_URI!, opts)
//       .then((mongoose) => {
//         return mongoose;
//       });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }
// }

// export default dbConnect;

// // import mongoose from 'mongoose';

// // type ConnectionObject = {
// //   isConnected?: number;
// // };

// // const connection: ConnectionObject = {};

// // async function dbConnect(): Promise<void> {
// //   // Check if we have a connection to the database or if it's currently connecting
// //   console.log("Trying to connect")
// //   if (connection.isConnected) {
// //     console.log('Already connected to the database');
// //     return;
// //   }

// //   try {
// //     // Attempt to connect to the database
// //     const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

// //     connection.isConnected = db.connections[0].readyState;

// //     console.log('Database connected successfully');
// //   } catch (error) {
// //     console.error('Database connection failed:', error);

// //     // Graceful exit in case of a connection error
// //     process.exit(1);
// //   }
// // }

// // export default dbConnect;
