const { DataTypes } = require("sequelize");
const sequelize = require("../../../database"); 
const simulator_report = sequelize.define("simulator_report", {
 simulator_report_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
 },
 total_mass: {
    type: DataTypes.STRING(50),
 },
 user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
 },
 humidity_percentage: {
    type: DataTypes.STRING(50),
 },
 solids_percentage: {
    type: DataTypes.STRING(50),
 },
 initial_solids: {
    type: DataTypes.STRING(50),
 },
 specific_heat_trigo: {
    type: DataTypes.STRING(50),
 },
 temperature_change: {
    type: DataTypes.STRING(50),
 },
 latent_heat_evaporation_water: {
    type: DataTypes.STRING(50),
 },
 initial_humidity: {
    type: DataTypes.STRING(50),
 },
 total_wheat_mass_exit: {
    type: DataTypes.STRING(50),
 },
 evaporated_water: {
    type: DataTypes.STRING(50),
 },
 sensible_heat: {
    type: DataTypes.STRING(50),
 },
 latent_heat: {
    type: DataTypes.STRING(50),
 },
 total_heat: {
    type: DataTypes.STRING(50),
 },
}, {
 tableName: "simulator_report",
 timestamps: false, // Assuming the table does not have timestamps
});

module.exports = SimulatorReport;
