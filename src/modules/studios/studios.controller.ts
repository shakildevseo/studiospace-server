import { Request, Response } from "express";
import { findAllStudios, findStudioById } from "./studios.service.js";



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
       const id = String(req.params.id)

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
            message: "Failed to fetch studio"
        })
    }
}