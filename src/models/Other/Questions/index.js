const { DataTypes } = require("sequelize");
const sequelize = require("../../database/mysql"); 

const Questions = sequelize.define("Questions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Question : DataTypes.TEXT,
  AnswerType : DataTypes.INTEGER,

  AnswerText : DataTypes.TEXT,
  AnswerMul : DataTypes.INTEGER,
  AnswerVD : DataTypes.BOOLEAN,


  MulOpcA : DataTypes.TEXT,
  MulOpcB : DataTypes.TEXT,
  MulOpcC : DataTypes.TEXT,
  MulOpcD : DataTypes.TEXT,
}, 
{
  tableName: "Questions",
  timestamps: false
});

module.exports = Questions