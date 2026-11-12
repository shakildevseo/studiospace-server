import { Request, Response } from "express";
import { findAllStudios, findStudioById, createStudio as createStudioInDB, updateStudio as UpdateStudioInDB, deleteOne } from "./studios.service.js";
import { createStudioSchema, updateStudioSchema } from "./studios.validation.js";
import { ObjectId } from "mongodb";



export async function getAllStudios(req: Request, res: Response) {

    try {
        const studios = await findAllStudios();

        // response to client

        res.status(200).json({
            success: true,
            message: 'Studios fetched successfully',
            data: studios
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch studios',
        })


    }


}

export async function getSingleStudio(req: Request, res: Response) {
    try {
        const id =  String(req.params.id);

         if(!ObjectId.isValid(id)){
            res.status(400).json({
                   success : false,
                message : "Invalid studio ID"
            });

            return
         };


        const studio = await findStudioById(id)

        if (!studio) {
            res.status(404).json({
                success: false,
                message: "Studio not found"
            })
            return
        }

        res.status(200).json({
            success: true,
            message: "Studio fetched successfully",
            data: studio
        })

    } catch (err) {
        console.log("Failed to fetch studio", err)
        res.status(500).json({
            success: false,
            message: "Failed to fetch studio"
        })
    }
}

export async function createStudio(req: Request, res: Response) {

    try {

        const studioData = req.body;


        // data validation

        const validationResult = createStudioSchema.safeParse(studioData);

        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Invalid studio data",
                errors: validationResult.error.issues
            })
            return;


        }

        const validatedData = validationResult.data


        const result = await createStudioInDB(validatedData);

        res.status(201).json({
            success: true,
            message: "Successfully created studio",
            data: result
        })



    } catch (err) {
        console.error("Failed to create studio", err)


        res.status(500).json({
            status: false,
            message: "Failed to create studio"
        })

    }


}

export async function updateStudio(req: Request, res: Response) {
    try {
        const id = String(req.params.id)

       if(!ObjectId.isValid(id)){
        res.status(400).json({
            success : false,
            message : "Invalid studio ID"
        })
       };



        const studioData = req.body;



        const validationResult = updateStudioSchema.safeParse(studioData)



        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Invalid studio data",
                error: validationResult.error.issues
            })
            return
        }

        const validatedData = validationResult.data


        const result = UpdateStudioInDB(id, validatedData)

        if ((await result).matchedCount === 0) {
            res.status(400).json({
                success: false,
                message: "Studio not found"
            })
            return
        }

        res.status(200).json({
            status : true,
            message: "Studio updated successfully"

        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update studio"
        })
    }
}

export async function deleteStudioById(req : Request, res : Response){
  try{

    const id = String(req.params.id);

    if(!ObjectId.isValid(id)){
        res.status(404).json({
            success : false,
            message : "Invalid studio ID"
        })

        return
    }


    const result = await deleteOne(String(id));

    if(result.deletedCount === 0){
        res.status(404).json({
            success : false,
            message : "Studio not found"

        })
        return
    }

    res.status(200).json({
         success: true,
            message: "Studio deleted successfully"
    })

  }catch(error){
    console.log(error)
  res.status(500).json({
    
     success: false,
            message: "Failed to delete studio"
  })
  }

     
}
