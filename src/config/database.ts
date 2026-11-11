import "dotenv/config";
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from environment variables!")
}
if (!DB_NAME) {
       throw new Error("DB_NAME is missing from environment variables!");
}




const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);


export async function connectToMongoDb() {
    try {
        await client.connect();
        console.log("successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        throw err;

    };
};


export function getDb(){
    return db;
};

export function getCollection(collectionName : string){
   return db.collection(collectionName)
}




