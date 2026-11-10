import {Router} from "express"
import { getAllStudios, getSingleStudio } from "./studios.controller.js";



const router = Router();


router.get("/", getAllStudios)
router.get("/:id",  getSingleStudio);


export default router