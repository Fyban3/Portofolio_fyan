const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost", // Replace with your MySQL host
    user: "root", // Replace with your MySQL username
    password: "", // Replace with your MySQL password
    database: "portfolio_db", // Replace with your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected!");
});

module.exports = connection;
