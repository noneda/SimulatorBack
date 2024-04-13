const { DataTypes } = require('sequelize');
const sequelize = require('../../database')

const getBalanceEnergia = require('./getBalanceEnergia');
const setBalanceEnergia = require('./setBalanceEnergia')

const getBalanceMateria = require('./getBalanceMateria');
const setBalanceMateria = require('./setBalanceMateria')

const setEstudianteBalanceMateria = require('./setEstudianteBalanceMateria')
const setEstudianteBalanceEnergia = require('./setEstudianteBalanceEnergia')

const Simulator = sequelize.define('Simulator', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idsetBalanceMateria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idgetBalanceMateria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idsetBalanceEnergia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idgetBalanceEnergia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idsetEstudianteBalanceMateria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idgetEstudianteBalanceEnergia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Simulator',
    timestamps: false
});

// Define relationships
Simulator.belongsTo(setBalanceMateria, { foreignKey: 'idsetBalanceMateria' });
Simulator.belongsTo(getBalanceMateria, { foreignKey: 'idgetBalanceMateria' });
Simulator.belongsTo(setBalanceEnergia, { foreignKey: 'idsetBalanceEnergia' });
Simulator.belongsTo(getBalanceEnergia, { foreignKey: 'idgetBalanceEnergia' });
Simulator.belongsTo(setEstudianteBalanceMateria, { foreignKey: 'idsetEstudianteBalanceMateria' });
Simulator.belongsTo(setEstudianteBalanceEnergia, { foreignKey: 'idgetEstudianteBalanceEnergia' });

module.exports = {
  Simulator,
  setBalanceEnergia,
  getBalanceEnergia,
  setBalanceMateria,
  getBalanceMateria,
  setEstudianteBalanceEnergia,
  setEstudianteBalanceMateria
};
