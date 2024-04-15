const BalanceMateria = require('../../../../models/Simulator/BalanceMateria')
const getBalanceMateria = require('../../../../models/Simulator/BalanceMateria/get')
const setBalanceMateria = require('../../../../models/Simulator/BalanceMateria/set')

const ShowDataBalanceMateriaID = async (req, res) => {
    try{
        const { id } = req.params;
        if(id){
            const Bal = await BalanceMateria.findOne({where: {id : id}  })
            const get = await getBalanceMateria.findOne({where: { id: Bal.idGet } })
            const set = await setBalanceMateria.findOne({where: { id: Bal.idSet } })  
            res.status(200).json({get, set}); 
        }
    }catch(error){
        console.error('Error with ShowDataBalanceMateria: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}
const ShowDataBalanceMateria = async (req, res) => {
    try{
        const get = await getBalanceMateria.findAll()
        const set = await setBalanceMateria.findAll()
        res.status(200).json({get, set});   
    }catch(error){
        console.error('Error with ShowDataBalanceMateria: ', error)
    }
}

module.exports = {ShowDataBalanceMateria, ShowDataBalanceMateriaID}