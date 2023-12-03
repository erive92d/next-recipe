import mongoose, { ConnectOptions } from 'mongoose';

const dbConnect = async () => {
    const uri = process.env.MONGODB_URL

    const local_uri = "mongodb://localhost:27017/task-manager"

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