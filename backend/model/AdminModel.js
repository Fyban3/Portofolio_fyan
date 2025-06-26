const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Admin extends Model {}

Admin.init(
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Admin",
    timestamps: true, // ✅ FIX typo
  }
);

module.exports = Admin;