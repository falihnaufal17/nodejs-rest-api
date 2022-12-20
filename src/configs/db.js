const mysql2 = require("mysql2");

const connection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "uhekroco123",
  database: "cute",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { connection };
