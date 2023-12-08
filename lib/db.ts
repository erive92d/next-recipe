import mongoose, { ConnectOptions } from 'mongoose';

const dbConnect = async () => {
  const local_uri = "mongodb://localhost:27017/recipe-db"
  const production_uri = process.env.MONGODB_URL


  const uri = process.env.NODE_ENV === "development" ? local_uri : production_uri
 
 
    if(!uri) {
        throw new Error(
            'No Mongo url available'
        )
    }
    const options = {
        useUnifiedTopology: true,
      } as ConnectOptions; 
    
      try {
        await mongoose.connect(uri, options)
        console.log("Mongo connection success")
      } catch (error) {
        throw new Error("Error in connecting to MongoDb")
      }

}
export default dbConnect