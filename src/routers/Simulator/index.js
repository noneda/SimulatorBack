import { Router } from "express";
import { getResultsData } from "../../controllers/Simulator/CalorEvaporacion";


const router = Router();

router.post("/", getResultsData);


export default router;
