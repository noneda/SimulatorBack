
const BalanceMateria = require('../../../utils/Simulator/BalanceMateria')

const APIBalanceMateria = async (req, res) => {
    try{
        const {
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio 
        } = req.body;
        const set = {
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio         
        }

        const data = new BalanceMateria(
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio 
        )
        console.log(set)
        if (data){
            const get = {
                Solidos: data.Solidos,
                gHumedadInicial : data.gHumedadInicial,
                gHumedadFinal : data.gHumedadFinal,
                AguaEvaporada : data.AguaEvaporada,
                FlujoAireSeco : data.FlujoAireSeco
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