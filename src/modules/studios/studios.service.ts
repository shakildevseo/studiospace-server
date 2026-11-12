import { getCollection } from "../../config/database.js";
import type { CreateStudioInput, UpdateStudioInput } from "./studios.validation.js";
import { ObjectId } from "mongodb"




const studiosCollection = getCollection("studios");


export async function findAllStudios() {
   const studios = await studiosCollection.find({}).toArray();

   return studios;
}



export async function findStudioById(id: string) {
   const studio = await studiosCollection.findOne({
      _id: new ObjectId(id)
   })

   return studio;
}

export async function createStudio(studioData: CreateStudioInput) {
   const result = await studiosCollection.insertOne(studioData)

   return result;
}

export async function updateStudio(id: string, studioData: UpdateStudioInput) {
   const result = await studiosCollection.updateOne(
      {
         _id : new ObjectId(id)
      },
      {
         $set: studioData 
      }
   )
   return result
}



export async function deleteOne(id : string){
const result = await studiosCollection.deleteOne({
   _id : new ObjectId(id)
})

return result;

}