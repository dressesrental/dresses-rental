import mongoose from "mongoose";
import "dotenv/config";

function mongoDBConnection(URI?: string): void {
  const MONGO_URI: string = URI || process.env.MONGODB_URI || "mongodb://localhost:27017";
  const MONGO_CONFIG = {  }

  
  try {
    mongoose.connect(MONGO_URI, MONGO_CONFIG)
      .then(() => {
        console.log('Mongoose connection Established')
      })
  } catch (error: any) {
    console.error(error.message)
    console.log('Mongoose connection Failed')
    process.exit(1)
  }
};

export default mongoDBConnection;
