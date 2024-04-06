const  { Router } = require('express')
const { getResultsData } = require('../../controllers/Simulator/CalorEvaporacion')


const router = Router();

router.post("/", getResultsData);

module.exports = router