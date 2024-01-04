import { Connection } from 'mongoose';
import { connect } from 'mongoose';




declare global {
  var mongoose: {
    promise: ReturnType<typeof dbConnect> | null;
    conn: typeof mongoose | null;
  };
}


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}




const dbConnect = async () => {
  const local_uri = "mongodb://localhost:27017/recipe-db"
  const production_uri = process.env.MONGODB_URL

  if (cached.conn) {
    console.log("🚀 Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(production_uri!, opts)
      .then((mongoose: any) => {
        console.log("✅ New connection established");
        return mongoose;
      })
      .catch((error: any) => {
        console.error("❌ Connection to database failed");
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;



  // console.log(cached, "cached")

  // if (!production_uri) {
  //   throw new Error("No uri")
  // }

  // const uri = process.env.NODE_ENV === "development" ? local_uri : production_uri


  // if (!uri) {
  //   throw new Error(
  //     'No Mongo url available'
  //   )
  // }
  // const options = {
  //   useUnifiedTopology: true,
  // } as ConnectOptions;

  // try {
  //   await mongoose.connect(production_uri, options)
  //   console.log("Mongo connection success")
  // } catch (error) {
  //   throw new Error("Error in connecting to MongoDb")
  // }

}
export default dbConnect