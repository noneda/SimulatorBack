const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const getBalanceEnergia = sequelize.define("getBalanceEnergia", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },		
	QLatenteAg : DataTypes.FLOAT, 		
	QSencibleMat: DataTypes.FLOAT, 		
	Qtotal : DataTypes.FLOAT

},{
    tableName : "getBalanceEnergia",
    timestamps: false
});

module.exports = getBalanceEnergia