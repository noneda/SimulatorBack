const  { Router } = require('express')

// *Simulate && Insert API - POST
const { APIBalanceMateria } = require('../../controllers/Simulator/BalanceMateria')
const { APIBalanceEnergia } = require('../../controllers/Simulator/BalanceEnergia')

// * Its Search APIS - GET
const { ShowDataBalanceEnergia , ShowDataBalanceEnergiaID} = require('../../controllers/Simulator/BalanceEnergia/ShowDatas')
const { ShowDataBalanceMateria , ShowDataBalanceMateriaID} = require('../../controllers/Simulator/BalanceMateria/ShowDatas')

const router = Router();

// * BALANCE DE MATERIA
/*
router.post("/BalanceMateria" , APIBalanceMateria);
router.get("/search/BalanceMateria/id/:id", ShowDataBalanceMateriaID);
router.get("/search/BalanceMateria", ShowDataBalanceMateria);
*/
// * BALANCE DE ENERGIA
router.post("/BalanceEnergia" , APIBalanceEnergia);
router.get("/search/BalanceEnergia/id/:id", ShowDataBalanceEnergiaID);
router.get("/search/BalanceEnergia", ShowDataBalanceEnergia);

module.exports = router