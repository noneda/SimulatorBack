import { Router } from "express";
import simulatorController from './../../controllers/Simulator';


const router = Router();

router.post("/", simulatorController.getResultsData);


export default router;
