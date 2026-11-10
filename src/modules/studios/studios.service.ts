import { getCollection } from "../../config/datrabase.js";


const studiosCollection = getCollection("studios");

export async function findAllStudios(){
   const studios = await studiosCollection.find({}).toArray();

   return studios;
}