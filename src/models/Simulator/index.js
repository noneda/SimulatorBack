const { DataTypes } = require("sequelize");
const sequelize = require("../../database/mysql"); // Assuming you have a Sequelize instance configured

const Simulator = sequelize.define("Simulator", {
IdSimulator: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
 },
 IdDataObtained: {
    type: DataTypes.INTEGER,
    allowNull: false,
 },
 IdResults: {
    type: DataTypes.INTEGER,
    allowNull: false,
 },
 UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
 },
}, {
 tableName: "Simulator",
 timestamps: false, 
});

Simulador.belongsTo(DataObtained, { foreignKey: 'idDataObtained' });
Simulador.belongsTo(ResultEquationsMachine, { foreignKey: 'IdResults' });
//Simulador.belongsTo(Usuarios, { foreignKey: 'IdUsuario' });

module.exports = Simulator;