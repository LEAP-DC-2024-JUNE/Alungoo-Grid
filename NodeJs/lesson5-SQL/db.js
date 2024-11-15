const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "expense_proj_user",
  password: "Alaska-976",
  database: "db_express_test",
});

db.connect((err) => {
  if (err) {
    console.log("Error occured to connect to MySQL database");
    throw err;
  }
  console.log("Successfully connected to MySQL database");
});
module.exports = db;
