const  { Router } = require('express')
const { APIBalanceMateria } = require('../../controllers/Simulator/BalanceMateria')
const {APIBalanceEnergia} = require('../../controllers/Simulator/BalanceEnergia')


const router = Router();

router.post("/BalanceMateria" , APIBalanceMateria);
router.post("/BalanceEnergia" , APIBalanceEnergia);


module.exports = router