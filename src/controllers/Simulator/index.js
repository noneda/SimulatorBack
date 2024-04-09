const {Formulas} = require('../../utils/Simulator')
const Simulator =  require('../../models/Simulator')


const getResultsData = async (req, res) => {
    try{
        console.log("POST")
        const {
            a,
            humedad_inicial,
            humedad_deseada,
            flujo_trigo,
            temperatura_inicial,
            temperatura_final,
            calor_especifico_trigo,
            entalpia_vaporizacion_agua
        } = req.body;
        var ResEcua =  new Formulas(
            a,
            humedad_inicial,
            humedad_deseada,
            flujo_trigo,
            temperatura_inicial,
            temperatura_final,
            calor_especifico_trigo,
            entalpia_vaporizacion_agua
        )
        console.log(a)
        //console.log(ResEcua.RetornAll.user_id = user_id)
    }catch(error){
        console.error('Error with getResultsData: ', error)
        res.status(500).json({
            mensage: error.mensage
        })
    }finally{
        if (ResEcua){
            const send = {
                agua_en_trigo_humedo : ResEcua.agua_en_trigo_humedo,
                agua_en_trigo_seco: ResEcua.agua_en_trigo_seco,
                agua_a_evaporar : ResEcua.agua_a_evaporar,
                calor_sencible : ResEcua.calor_sencible,
                calor_latente : ResEcua.calor_latente,
                calor_total : ResEcua.calor_total,
                peso_neto_trigo : ResEcua.peso_neto_trigo
            }
            const report = await Simulator.create(ResEcua.RetornAll)
    
            res.status(500).json(
                {
                    send
                }
            )
        }
    }
}


module.exports = {
    getResultsData
}