import "dotenv/config";
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from environment variables!")
}


const client = new MongoClient(MONGODB_URI);

export async function connectToMongoDb() {
    try {
        await client.connect();
        console.log("successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        throw err

    }
}





