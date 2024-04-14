const { DataTypes } = require('sequelize');
const sequelize = require('../../database')

const BalanceEnergia = require('./BalanceEnergia');
const BalanceMateria = require('./BalanceMateria');

const setEstudianteBalanceMateria = require('./setEstudianteBalanceMateria')
const setEstudianteBalanceEnergia = require('./setEstudianteBalanceEnergia')

const Simulator = sequelize.define('Simulator', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idBalanceMateria: {
        type : DataTypes.INTEGER,
        references : {
            model : BalanceMateria,
            key : 'id' 
        }
    },
    idBalanceEnergia: {
        type : DataTypes.INTEGER,
        references : {
            model : BalanceEnergia,
            key : 'id' 
        }
    },
    idsetEstudianteBalanceMateria: {
        type : DataTypes.INTEGER,
        references : {
            model : setEstudianteBalanceMateria,
            key : 'id' 
        }
    },
    idsetEstudianteBalanceEnergia: {
        type: DataTypes.INTEGER,
        references : {
            model : setEstudianteBalanceEnergia,
            key : 'id' 
        }
    }
}, {
    tableName: 'Simulator',
    timestamps: false
});

// Define relationships

module.exports = {
  Simulator,
};
