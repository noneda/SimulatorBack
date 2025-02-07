const { DataTypes } = require("sequelize");
const sequelize = require("../../database/mysql"); 

const Responces = sequelize.define("Responses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idQuestion : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  AnswerText : DataTypes.TEXT,
  AnswerMul : DataTypes.INTEGER,
  AnswerVD : DataTypes.BOOLEAN,
  Responces : DataTypes.BOOLEAN
}, 
{
  tableName: "Responses",
  timestamps: false
});

module.exports = Responces