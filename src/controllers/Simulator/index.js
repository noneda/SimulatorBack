import { Router } from "express";
import * as simulatorController from './../../controllers/Simulator/Index';


const router = Router();

router.post("/", simulatorController.getResultsData);


export default router;
