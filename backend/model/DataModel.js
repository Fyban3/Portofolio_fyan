const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Biodata Model
const Biodata = sequelize.define("biodata", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  photo_url: { type: DataTypes.STRING, allowNull: true },
}, { timestamps: false });

// Skill Model
const Skill = sequelize.define("skills", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false });

// Project Model
const Project = sequelize.define("projects", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  image_url: { type: DataTypes.STRING, allowNull: true },
  link: { type: DataTypes.STRING, allowNull: true },
}, { timestamps: false });

// Admin Model
const Admin = sequelize.define("admin", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false });

module.exports = {
  Biodata,
  Skill,
  Project,
  Admin,
};
