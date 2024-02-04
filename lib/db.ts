import { Connection, connect } from 'mongoose';

let cachedDb: Connection | null = null;

export default async function dbConnect(): Promise<Connection> {
  if (cachedDb) {
    return cachedDb;
  }

  const db: Connection = await connect(process.env.MONGODB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedDb = db;
  return db;
}





// declare global {
//   var mongoose: {
//     promise: ReturnType<typeof dbConnect> | null;
//     conn: typeof mongoose | null;
//   };
// }




/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }




// const dbConnect = async () => {
//   const local_uri = "mongodb://localhost:27017/recipe-db"
//   const production_uri = process.env.MONGODB_URL

//   if (cached.conn) {
//     console.log("🚀 Using cached connection");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = connect(production_uri!, opts)
//       .then((mongoose: any) => {
//         console.log("✅ New connection established");
//         return mongoose;
//       })
//       .catch((error: any) => {
//         console.error("❌ Connection to database failed");
//         throw error;
//       });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;


// }
// export default dbConnect