const { DataTypes } = require("sequelize");
const sequelize = require("../../database/mysql"); // Assuming you have a Sequelize instance configured

const ResultEquationsMachine = sequelize.define("ResultEquationsMachine", {
IdDataObtained: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
 },
 IdSimulator: {
    type: DataTypes.INTEGER,
    allowNull: false, // Assuming this is a required field
 },
 initial_humidity: {
    type: DataTypes.FLOAT,
 },
 total_mass_wheat_exit: {
    type: DataTypes.FLOAT,
 },
 evaporated_water: {
    type: DataTypes.FLOAT,
 },
 sensible_heat: {
    type: DataTypes.FLOAT,
 },
 latent_heat: {
    type: DataTypes.FLOAT,
 },
 total_heat: {
    type: DataTypes.FLOAT,
 },
}, {
 tableName: "ResultEquationsMachine",
 timestamps: false, // Assuming the table does not have timestamps
});

module.exports = ResultadoEcuacionesMaquina;