const EqBalanceEnergia = require('../../../utils/Simulator/BalanceEnergia')

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
            TemInicial: TemInicial,
            TemFinal : TemFinal,
            LambDa: LambDa,
            CalorEspMa : CalorEspMa,
            CalorEspAg : CalorEspAg     
        }

        const data = new EqBalanceEnergia(
            AguaEvaporada,
            CantidadInicial,
            TemInicial,
            TemFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        )
        if (data){
            const get = {
                QLatenteAg : data.QLatenteAg,
                QSencibleMat : data.QSensibleMat,
                Qtotal : data.QTotal
            }
            res.status(200).json({get ,set});
        }
        
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {APIBalanceEnergia}