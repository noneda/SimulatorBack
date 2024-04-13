const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setBalanceEnergia = sequelize.define("setBalanceEnergia", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
	CantidadInical : DataTypes.FLOAT,	
	HumedadInical : DataTypes.FLOAT, 		
	HumedadFinal : DataTypes.FLOAT, 		
	FluidoServicio : DataTypes.FLOAT
},{
    tableName : "setBalanceEnergia",
    timestamps : false
})

module.exports = setBalanceEnergia