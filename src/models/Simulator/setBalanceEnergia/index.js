const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setBalanceEnergia = sequelize.define("setBalanceEnergia", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
	TemInicial : DataTypes.FLOAT , 		
	TemFinal : DataTypes.FLOAT, 		
	LambDa : DataTypes.FLOAT,			
	CalorEspMa : DataTypes.FLOAT, 		
	CalorEspAg : DataTypes.FLOAT 
},{
    tableName : "setBalanceEnergia",
    timestamps : false
})

module.exports = setBalanceEnergia