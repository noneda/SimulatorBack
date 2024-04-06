const { DataTypes } = require("sequelize");
const sequelize = require("./../../database")// Assuming you have a Sequelize instance configured

const DataObtained = sequelize.define("DataObtained", {
idDataObtained: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
 },
 idSimulator: {
    type: DataTypes.INTEGER,
    allowNull: false, // Assuming this is a required field
 },
 total_mass: {
    type: DataTypes.FLOAT,
 },
 humidity_percentage: {
    type: DataTypes.FLOAT, 
 },
 solids_percentage: {
    type: DataTypes.FLOAT,
 },
 initial_solids: {
    type: DataTypes.FLOAT,
 },
 specific_heat_of_wheat: {
    type: DataTypes.FLOAT,
 },
 temperature_change: {
    type: DataTypes.FLOAT,
 },
 latent_heat_of_water_evaporation: {
    type: DataTypes.FLOAT,
 },
}, {
 tableName: "DataObtained",
 timestamps: false, // Assuming the table does not have timestamps
});

module.exports = DataObtained;