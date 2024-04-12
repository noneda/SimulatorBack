const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); 

const NewSimulator  = sequelize.define("SimulatorReport", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CantidadInicial: DataTypes.FLOAT,
  MagCantidadInicial: DataTypes.STRING(255),
  HumedadInicial: DataTypes.FLOAT,
  MagHumedadInicial: DataTypes.STRING(255),
  HumedadFinal: DataTypes.FLOAT,
  MagHumedadFinal: DataTypes.STRING(255),
  FluidoServicio: DataTypes.FLOAT,
  MagFluidoServicio: DataTypes.STRING(255),
  TempInicial: DataTypes.FLOAT,
  LambDa: DataTypes.FLOAT,
  MagTempInicial: DataTypes.STRING(255),
  TempFinal: DataTypes.FLOAT,
  MagTempFinal: DataTypes.STRING(255),
  CalorEspMa: DataTypes.FLOAT,
  MagCalorEspMa: DataTypes.STRING(255),
  CalorEspAg: DataTypes.FLOAT,
  MagCalorEspAg: DataTypes.STRING(255),
  Solidos: DataTypes.FLOAT,
  MagSolidos: DataTypes.STRING(255),
  gHumedadInicial: DataTypes.FLOAT,
  MaggHumedadInicial: DataTypes.STRING(255),
  gHumedadFinal: DataTypes.FLOAT,
  MaggHumedadFinal: DataTypes.STRING(255),
  AguaEvaporada: DataTypes.FLOAT,
  MagAguaEvaporada: DataTypes.STRING(255),
  FlujoAireSeco: DataTypes.FLOAT,
  MagFlujoAireSeco: DataTypes.STRING(255),
  QLatenteAg: DataTypes.FLOAT,
  MagQLatenteAg: DataTypes.STRING(255),
  QSensibleMat: DataTypes.FLOAT,
  MagQSensibleMat: DataTypes.STRING(255),
  QTotal: DataTypes.FLOAT,
  MagQTotal: DataTypes.STRING(255)
}, {
  tableName: "simulator_report",
  timestamps: false
});

module.exports = NewSimulator;