const BalanceEnergia = require('../../../../models/Simulator/BalanceEnergia')
const getBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/get')
const setBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/set')

const saveBalanceEnergia = async (req, res) => {
    try{
        console.log("POST -> SAVE BALANCE ENERGIA")
        const {
            get,
            set
          } = req.body;

        const getReport = await getBalanceEnergia.create(
            get
        )
        const setReport = await setBalanceEnergia.create(
            set
        )
        const send = await BalanceEnergia.create(
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

module.exports = {saveBalanceEnergia}