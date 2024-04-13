const BalanceEnergia = require('../../../utils/Simulator/BalanceEnergia')

const APIBalanceEnergia = async (req, res) => {
    try{
        const {
            AguaEvaporada,
            CantidadInicial,
            TempInicial,
            TempFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        } = req.body;

        console.log("BODY ->" , req.body)


        const set = new BalanceEnergia(
            AguaEvaporada,
            CantidadInicial,
            TempInicial,
            TempFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        )
        console.log(set)
        if (set){
            const get = {
                QLatenteAg : set.QLatenteAg,
                QSensibleMat : set.QSensibleMat,
                QTotal : set.QTotal
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