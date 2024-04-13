const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setBalanceMateria = sequelize.define("setBalanceMateria", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
	CantidadInicial :DataTypes.FLOAT ,	
	HumedadInicial : DataTypes.FLOAT, 		
	HumedadFinal : DataTypes.FLOAT, 		
	FluidoServicio : DataTypes.FLOAT
}, {
    tableName : "setBalanceMateria",
    timestamps : false
})  

module.exports = setBalanceMateria