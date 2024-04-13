const BalanceEnergia = require('../../../utils/Simulator/BalanceEnergia')

const getBalanceEnergia = require('../../../models/Simulator/getBalanceEnergia')
const setBalanceEnergia = require('../../../models/Simulator/setBalanceEnergia')

const APIBalanceEnergia = async (req, res) => {
    try{
        const {
            AguaEvaporada,
            CantidadInicial,
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        } = req.body;
        const set = {
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg     
        }

        const data = new BalanceEnergia(
            AguaEvaporada,
            CantidadInicial,
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        )
        console.log(set)
        if (data){
            const get = {
                QLatenteAg : data.QLatenteAg,
                QSencibleMat : data.QSensibleMat,
                Qtotal : data.QTotal
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

module.exports = {APIBalanceEnergia}