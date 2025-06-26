const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  'portfolio_db', // Ganti dengan nama database Anda
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    // logging: process.env.NODE_ENV === "development" ? console.log : false,
    // pool: {
    //   max: 10,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
  }
);

// Cek koneksi saat aplikasi start
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