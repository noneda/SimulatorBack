const BalanceEnergia = require('../../../../models/Simulator/BalanceEnergia')
const getBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/get')
const setBalanceEnergia = require('../../../../models/Simulator/BalanceEnergia/set')

const ShowDataBalanceEnergiaID = async (req, res) => {
    try{
        const { id } = req.params;
        if(id){
            const Bal = await BalanceEnergia.findOne({where: {id : id}})
            const get = await getBalanceEnergia.findOne({where: { id: Bal.idGet } })
            const set = await setBalanceEnergia.findOne({where: { id: Bal.idSet } }) 
            res.status(200).json({get, set});
        } 
    }catch(error){
        console.error('Error with ShowDataBalanceEnergia: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}
const ShowDataBalanceEnergia = async (req, res) => {
    try{
        const get = await getBalanceEnergia.findAll()
        const set = await setBalanceEnergia.findAll()
        res.status(200).json({get, set});   
    }catch(error){
        console.error('Error with ShowDataBalanceEnergia: ', error)
    }
}

module.exports = {ShowDataBalanceEnergia, ShowDataBalanceEnergiaID}