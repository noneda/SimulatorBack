const getBalanceMateria = require('../../../../models/Simulator/getBalanceMateria')
const setBalanceMateria = require('../../../../models/Simulator/setBalanceMateria')

const ShowDataBalanceEnergiaID = async (req, res) => {
    try{
        const { id } = req.params;
        if(id){
            const get = await getBalanceMateria.findAll({where: { id: id } })
            const set = await setBalanceMateria.findAll({where: { id: id } }) 
            res.status(200).json({get, set});
        }else{
            const get = await getBalanceMateria.findAll()
            const set = await setBalanceMateria.findAll()
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
        const get = await getBalanceMateria.findAll()
        const set = await setBalanceMateria.findAll()
        res.status(200).json({get, set});   
    }catch(error){
        console.error('Error with ShowDataBalanceEnergia: ', error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {ShowDataBalanceEnergia, ShowDataBalanceEnergiaID}