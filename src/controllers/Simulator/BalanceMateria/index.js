
const EqsBalanceMateria = require('../../../utils/Simulator/BalanceMateria')

const APIBalanceMateria = async (req, res) => {
    try{
        const {
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio 
        } = req.body;
        const set = {
            CantidadInicial : CantidadInicial, 
            HumedadInicial : HumedadFinal,
            HumedadFinal : HumedadFinal,
            FluidoServicio : FluidoServicio         
        }

        const data = new EqsBalanceMateria(
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio 
        )
        if (data){
            const get = {
                Solidos: data.Solidos,
                gHumedadInicial : data.gHumedadInicial,
                gHumedadFinal : data.gHumedadFinal,
                AguaEvaporada : data.AguaEvaporada,
                FlujoAireSeco : data.FlujoAireSeco
            }
            res.status(200).json({get ,set});
        }
        
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {APIBalanceMateria}