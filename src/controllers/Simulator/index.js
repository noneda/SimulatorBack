const NewFormulas = require('../../utils/Simulator')
const NewSimulator =  require('../../models/Simulator')

const getResultsData = async (req, res) => {
    try {
        console.log("POST");

        const {
            user_id,
            CantidadInicial,
            HumedadInicial,
            HumedadFinal,
            FluidoServicio,
            TempInicial,
            TempFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        } = req.body;

        
        console.log( "->" , req.body);

        // Crear una instancia de NewFormulas (asumiendo que es una clase existente)
        const Data = new NewFormulas(
            user_id,
            CantidadInicial,
            HumedadInicial,
            HumedadFinal,
            FluidoServicio,
            TempInicial,
            TempFinal,
            LambDa,
            CalorEspMa,
            CalorEspAg
        );

        // Si la instancia de Data se crea correctamente
        if (Data) {
            const send = {
                Solidos: Data.Solidos,
                gHumedadInicial: Data.gHumedadInicial,
                gHumedadFinal: Data.gHumedadFinal,
                AguaEvaporada: Data.AguaEvaporada,
                FlujoAireSeco: Data.FlujoAireSeco,
                QLatenteAg: Data.QLatenteAg,
                QSensibleMat: Data.QSensibleMat,
                QTotal: Data.QTotal,
            };

            // Crear un nuevo reporte en la base de datos usando el modelo NewSimulator
            const report = await NewSimulator.create(
                Data.RetornAll // Insertar los datos del objeto send en la creación del reporte
            );
  
            res.status(200).json(send); // Enviar los datos de vuelta como respuesta
            console.log(Data.RetornAll)
        }
    } catch (error) {
        console.error('Error with getResultsData: ', error);
        res.status(500).json({
            message: error.message  // Usar "message" en lugar de "mensage"
        });
    }
};

module.exports = {
    getResultsData
};
