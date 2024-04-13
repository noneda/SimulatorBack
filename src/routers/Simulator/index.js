const  { Router } = require('express')

// * Simulate API - POST
const { APIBalanceMateria } = require('../../controllers/Simulator/BalanceMateria')
const { APIBalanceEnergia } = require('../../controllers/Simulator/BalanceEnergia')

// * Its Search APIS - GET
const { ShowDataBalanceMateria , ShowDataBalanceMateriaID} = require('../../controllers/Simulator/BalanceMateria/ShowDatas')
const { ShowDataBalanceEnergia , ShowDataBalanceEnergiaID} = require('../../controllers/Simulator/BalanceEnergia/ShowDatas')

// * Its Save Datas - POST
const {saveBalanceMateria} = require('../../controllers/Simulator/BalanceMateria/SaveDatas')
const {saveBalanceEnergia} = require('../../controllers/Simulator/BalanceEnergia/SaveDatas')

const router = Router();

// * BALANCE DE MATERIA
router.post("/BalanceMateria" , APIBalanceMateria);
router.get("/search/BalanceMateria/id/:id", ShowDataBalanceMateriaID);
router.get("/search/BalanceMateria", ShowDataBalanceMateria);
router.post("/save/BalanceMateria", saveBalanceMateria)
// * BALANCE DE ENERGIA
router.post("/BalanceEnergia" , APIBalanceEnergia);
router.get("/search/BalanceEnergia/id/:id", ShowDataBalanceEnergiaID);
router.get("/search/BalanceEnergia", ShowDataBalanceEnergia);
router.post("/save/BalanceEnergia", saveBalanceEnergia)

module.exports = router