const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setBalanceMateria = sequelize.define("setBalanceMateria", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    TemInical : DataTypes.FLOAT, 		
	TemFinal : DataTypes.FLOAT, 		
	LambDa : DataTypes.FLOAT,			
	CalorEspMa : DataTypes.FLOAT, 		
	CalorEspAg : DataTypes.FLOAT 	
}, {
    tableName : "setBalanceMateria",
    timestamps : false
})

module.exports = setBalanceMateria