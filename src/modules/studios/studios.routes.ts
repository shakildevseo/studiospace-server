import {Router} from "express"
import { createStudio, getAllStudios, getSingleStudio } from "./studios.controller.js";



const router = Router();


router.get("/", getAllStudios)
router.get("/:id",  getSingleStudio);
router.post("/", createStudio )


export default router