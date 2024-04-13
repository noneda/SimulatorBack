
const BalanceMateria = require('../../../utils/Simulator/BalanceMateria')

const APIBalanceMateria = async (req, res) => {
    try{
        const {
            CantidadInicial, 
            HumedadInical,
            HumedadFinal,
            FluidoServicio 
        } = req.body;

        console.log("BODY ->" , req.body)


        const set = new BalanceMateria(
            CantidadInicial, 
            HumedadInical,
            HumedadFinal,
            FluidoServicio 
        )
        if (set){
            const get = {
                Solidos: set.Solidos,
                gHumedadInical : set.HumedadInical,
                gHumedadFinal : set.HumedadFinal,
                AguaEvaporada : set.AguaEvaporada,
                FlujoAireSeco : set.FlujoAireSeco
            }
            console.log("Balance de Energia -> ", get)
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