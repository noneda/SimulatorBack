const getBalanceMateria = require('../../../../models/Simulator/BalanceMateria/get')
const setBalanceMateria = require('../../../../models/Simulator/BalanceMateria/set')

const saveBalanceMateria = async (req, res) => {
    try{
        const {
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio,
            Solidos,
            gHumedadInicial,
            gHumedadFinal ,
            AguaEvaporada ,
            FlujoAireSeco  
        } = req.body;

        console.log("BODY ->" , req.body)
        
        const set = {
            CantidadInicial, 
            HumedadInicial,
            HumedadFinal,
            FluidoServicio         
        }
        const get = {
            Solidos,
            gHumedadInicial,
            gHumedadFinal,
            AguaEvaporada,
            FlujoAireSeco
        }

        console.log("SET ->", set)
        console.log("GET -> ", get)
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
        res.status(200).json({
            getBalanceMateria: getReport.id,
            setBalanceMateria: setReport.id
        });
        
        
    }catch(error){
        console.error('Error with Send Data to Balance de Materia: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {saveBalanceMateria}