const BalanceMateria = require('../../../../models/Simulator/BalanceMateria')
const getBalanceMateria = require('../../../../models/Simulator/BalanceMateria/get')
const setBalanceMateria = require('../../../../models/Simulator/BalanceMateria/set')

const saveBalanceMateria = async (req, res) => {
    try{
        console.log("POST -> SAVE BALANCE MATERIA")
        const {
            get,
            set
            } = req.body;

        const getReport = await getBalanceMateria.create(
            get
        )
        const setReport = await setBalanceMateria.create(
            set
        )
        const send = await BalanceMateria.create(
            {
                idSet: setReport.id,
                idGet: getReport.id
            }
        )

        res.status(200).json(
            {
                mensagge : "Succesful!",
                id : send.id,
                idSet : setReport.id,
                idGte : getReport.id
            }
        );
        
        
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
    
module.exports = {saveBalanceMateria}