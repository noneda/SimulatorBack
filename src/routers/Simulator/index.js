const  { Router } = require('express')
const getNewResults = require('../../controllers/Simulator/')


const router = Router();

router.post("/", getNewResults);

module.exports = router