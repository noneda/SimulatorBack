const  { Router } = require('express')
const { getResultsData } = require('../../controllers/Simulator/')

const router = Router();

router.post("/" , getResultsData);


module.exports = router