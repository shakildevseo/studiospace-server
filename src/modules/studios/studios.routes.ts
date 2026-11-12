import {Router} from "express"
import { createStudio, getAllStudios, getSingleStudio, updateStudio } from "./studios.controller.js";



const router = Router();


router.get("/", getAllStudios)
router.get("/:id",  getSingleStudio);
router.post("/", createStudio )
router.patch("/:id", updateStudio)


export default router