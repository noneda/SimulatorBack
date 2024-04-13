
const BalanceMateria = require('../../../utils/Simulator/BalanceMateria')

const getBalanceMateria = require('../../../models/Simulator/getBalanceMateria')
const setBalanceMateria = require('../../../models/Simulator/setBalanceMateria')

const APIBalanceMateria = async (req, res) => {
    try{
        const {
            CantidadInicial, 
            HumedadInical,
            HumedadFinal,
            FluidoServicio 
        } = req.body;

        console.log("BODY ->" , req.body)
        const set = {
            CantidadInicial, 
            HumedadInical,
            HumedadFinal,
            FluidoServicio             
        }

        const data = new BalanceMateria(
            CantidadInicial, 
            HumedadInical,
            HumedadFinal,
            FluidoServicio 
        )
        console.log(set)
        if (set){
            const get = {
                Solidos: data.Solidos,
                gHumedadInical : data.HumedadInical,
                gHumedadFinal : data.HumedadFinal,
                AguaEvaporada : data.AguaEvaporada,
                FlujoAireSeco : data.FlujoAireSeco
            }
            console.log("Balance de Energia -> ", get)
            const getReport = await getBalanceMateria.create(
                get
            )
            const setReport = await setBalanceMateria.create(
                set
            )
            console.log(
            {
                report : "Get",
                getReport
            },
            {
                report : "Set",
                setReport
            }
            )
            res.status(200).json(get);
        }
        
    }catch(error){
        console.error('Error with APIBalanceEnergia: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {APIBalanceMateria}