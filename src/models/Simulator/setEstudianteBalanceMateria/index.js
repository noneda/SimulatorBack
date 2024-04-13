const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const setEstudianteBalanceMateria = sequelize.define("setEstudianteBalanceMateria", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    QLatenteAg : DataTypes.FLOAT,
	QSencibleMat : DataTypes.FLOAT,
	Qtotal  : DataTypes.FLOAT
},{
    tableName : "setEstudianteBalanceMateria",
    timestamps : false
})

module.exports = setEstudianteBalanceMateria