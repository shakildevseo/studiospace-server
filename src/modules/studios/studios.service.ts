import { getCollection } from "../../config/datrabase.js";


const studiosCollection = getCollection("studios");

export async function findAllStudios(){
   const studios = await studiosCollection.find({}).toArray();

   return studios;
}



export async function findStudioById(id: string){
        const studio = await studiosCollection.findOne({
         id
        })

        return studio;
}