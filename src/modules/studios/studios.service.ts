import { getCollection } from "../../config/database.js";
import type { CreateStudioInput } from "./studios.validation.js"; 
const studiosCollection = getCollection("studios");

export async function findAllStudios() {
   const studios = await studiosCollection.find({}).toArray();

   return studios;
}



export async function findStudioById(id: string) {
   const studio = await studiosCollection.findOne({
      id
   })

   return studio;
}

export async function createStudio(studioData: CreateStudioInput) {
   const result = await studiosCollection.insertOne(studioData)
   
   return result;
}