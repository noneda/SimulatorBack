const {DataTypes} = require('sequelize')

const sequelize = require('../../../database')

const getBalanceMateria = require('./get')
const setBalanceMateria = require('./set')


const BalanceMateria = sequelize.define("BalanceMateria", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    idSet : {
        type : DataTypes.INTEGER,
        references : {
            model : setBalanceMateria,
            key : 'id' 
        }
    },
	idGet : {
        type : DataTypes.INTEGER,
        references : {
            model : getBalanceMateria,
            key : 'id' 
        }
    }
}, {
    tableName : "BalanceMateria",
    timestamps : false
});


module.exports = BalanceMateria