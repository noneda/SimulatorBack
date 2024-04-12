const NewFormulas = require('../../utils/Simulator')
const NewSimulator =  require('../../models/Simulator')

const getNewResults = async (req , res) => {
    try{
        const {
            user_id,
            CantidadInical,
            HumedadInical,
            HumedadFinal,
            FluidoServicio,
            TemInical,
            TemFinal,
            LamnDa,
            CalorEspMa,
            CalorEspAg
        } = req.body;
        // Reporte del Body... Para ver q es lo que Envia
        console.log(req.body)

        var Data = NewFormulas(
            user_id,
            CantidadInical,
            HumedadInical,
            HumedadFinal,
            FluidoServicio,
            TemInical,
            TemFinal,
            LamnDa,
            CalorEspMa,
            CalorEspAg
        )

        if(Data){

            const send = {
                Solidos : Data.Solidos,
                gHumedadInicial : Data.gHumedadInicial,
                gHumedadFinal : Data.gHumedadFinal,
                AguaEvaporada : Data.AguaEvaporada,
                FlujoAireSeco : Data.FlujoAireSeco,
                QLatenteAg : Data.QLatenteAg,
                QSencibleMat : Data.QSencibleMat, 
                QTotal : Data.QTotal,
            }
            // Reporte de Send...
            console.log(send)
            const report = await NewSimulator.create(Data.RetornAll)

            //Reporte de Reporete de la base de Datos

            console.log(report)
            res.status(500).json(
                {
                    mensage : "Succesful!!",
                    send : send
                }
            )
        }else{
            res.status(404).json(
                {
                    mensage : "Error With Data Process"
                }
            )
        }
    }catch(error) {

        res.status(500).json({
            mensage: error.mensage
        })

    }
}

module.exports = {
    getNewResults
}