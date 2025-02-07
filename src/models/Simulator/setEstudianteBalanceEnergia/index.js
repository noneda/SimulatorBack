const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setEstudianteBalanceEnergia = sequelize.define("setEstudianteBalanceEnergia", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    CantidadInical : DataTypes.FLOAT, 	
	HumedadInical : DataTypes.FLOAT, 		
	HumedadFinal : DataTypes.FLOAT, 		
	FluidoServicio : DataTypes.FLOAT	
}, {
    tableName : "setEstudianteBalanceEnergia",
    timestamps : false
})

module.exports = setEstudianteBalanceEnergia