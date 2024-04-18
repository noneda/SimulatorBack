const setEstudianteBalanceEnergia = require('../../../models/Simulator/setEstudianteBalanceEnergia')

const StudentBalanceEnergia = (res , req) => {
    try{

    }catch(error){

        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    StudentBalanceEnergia
}