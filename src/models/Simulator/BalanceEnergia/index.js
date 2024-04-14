const {DataTypes} = require('sequelize')

const sequelize = require('../../../../database')

const getBalanceEnergia = require('./get')
const setBalanceEnergia = require('./set')


const BalanceEnergia = sequelize.define("BalanceEnergia", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    idSet : {
        type : DataTypes.INTEGER,
        references : {
            model : setBalanceEnergia,
            key : 'id' 
        }
    },
	idGet : {
        type : DataTypes.INTEGER,
        references : {
            model : getBalanceEnergia,
            key : 'id' 
        }
    }
}, {
    tableName : "BalanceEnergia",
    timestamps : false
});


module.exports = BalanceEnergia