const getBalanceEnergia = require('../../../../models/Simulator/getBalanceEnergia')
const setBalanceEnergia = require('../../../../models/Simulator/setBalanceEnergia')

const ShowDataBalanceEnergiaID = async (req, res) => {
    try{
        const { id } = req.params;
        if(id){
            const get = await getBalanceEnergia.findAll({where: { id: id } })
            const set = await setBalanceEnergia.findAll({where: { id: id } }) 
            res.status(200).json({get, set});
        }else{
            const get = await getBalanceEnergia.findAll()
            const set = await setBalanceEnergia.findAll()
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
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {ShowDataBalanceEnergia, ShowDataBalanceEnergiaID}