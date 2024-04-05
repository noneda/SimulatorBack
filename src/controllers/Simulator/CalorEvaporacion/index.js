import EcuaEvaporate from '../../../utils/Simulator/CalorEvaporacion'
//import EcuaEvaporacion from '../../../models/Simulator/'

export const getResultsData = async (req, res) => {
    try{
        const {
            InitialWeight,
            FinalWeight, 
            heatUsed,
            massAEvaporate,
            heatIdealVaporization,
            supplyEnergy
        } = req.body;
        const ResEcua = EcuaEvaporate(
            InitialWeight,
            FinalWeight,
            heatUsed,
            massAEvaporate,
            heatIdealVaporization,
            supplyEnergy
        );
    }catch(error){
        console.error('Error with getResultsData: ', error)
        res.status(500).json({
            mensage: error.mensage
        })
    }finally{
        const send = {
            humidityPercentage : ResEcua.humidityPercentage(),
            IdealEnergy: ResEcua.IdealEnergy(),
            EquationExcessEnergy : ResEcua.EquationExcessEnergy(),
            EquationDeficitEnergy : ResEcua.EquationDeficitEnergy(),
            timeToEvaporateEverything : ResEcua.timeToEvaporateEverything()
        }

        res.status(500).json(
            {
                send
            }
        )
    }
}