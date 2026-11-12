import {Router} from "express"
import { createStudio, deleteStudioById, getAllStudios, getSingleStudio, updateStudio } from "./studios.controller.js";



const router = Router();


router.get("/", getAllStudios)
router.get("/:id",  getSingleStudio);
router.post("/", createStudio )
router.patch("/:id", updateStudio)
router.delete("/:id", deleteStudioById)

export default router