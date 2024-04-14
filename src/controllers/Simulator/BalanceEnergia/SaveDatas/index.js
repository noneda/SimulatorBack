const getBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/get')
const setBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/set')

const saveBalanceEnergia = async (req, res) => {
    try{
        const {
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg,
            QLatenteAg,
            QSencibleMat,
            Qtotal 
        } = req.body;

        console.log("BODY ->" , req.body)
        
        const set = {
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg     
        }
        const get = {
            QLatenteAg,
            QSencibleMat,
            Qtotal 
        }

        console.log("SET ->", set)
        console.log("GET -> ", get)
        const getReport = await getBalanceEnergia.create(
            get
        )
        const setReport = await setBalanceEnergia.create(
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
            getBalanceEnergia: getReport.id,
            setBalanceEnergia: setReport.id
        });
        
        
    }catch(error){
        console.error('Error with Send Data to Balance de Materia: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {saveBalanceEnergia}