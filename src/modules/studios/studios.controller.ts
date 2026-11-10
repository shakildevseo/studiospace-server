import { Request, Response } from "express";
import { findAllStudios } from "./studios.service.js";



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