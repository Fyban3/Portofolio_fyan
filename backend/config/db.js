const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "portfolio_db", // Replace with your database name
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Define the articles model dynamically
sequelize.define("articles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to the database successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
}

testConnection();

module.exports = sequelize;