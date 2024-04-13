const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const getBalanceMateria = sequelize.define("getBalanceMateria", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },		
	Solidos : DataTypes.FLOAT,
	gHumedadInicial : DataTypes.FLOAT, 	
	gHumedadFinal : DataTypes.FLOAT, 		
	AguaEvaporada : DataTypes.FLOAT, 		
	FlujoAireSeco : DataTypes.FLOAT 

},{
    tableName : "getBalanceEnergia",
    timestamps: false
});

module.exports = getBalanceMateria