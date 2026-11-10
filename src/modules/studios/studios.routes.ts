import {Router} from "express"
import { getAllStudios } from "./studios.controller.js";



const router = Router();


router.get("/", getAllStudios)


export default router