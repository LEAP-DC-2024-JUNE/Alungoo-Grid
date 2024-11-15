const express = require("express");
const router = express.Router();
const db = require("../db");

// Create POST method
router.post("", (request, response) => {
  const { date, description, type, amount } = request.body; // gadnaas orj irj bga
  const sql =
    "INSERT INTO tb_expenses (c_date, c_description, fk_expense_type, c_amount) VALUES ( ?, ?, ?, ? )"; // sql d hiine
  db.query(sql, [date, description, type, amount], (error, result) => {
    // db iin query gedeg method duudaj ogj bn 3 params awj bn ,
    //
    if (error) {
      console.log(
        "error occured while inserting a new expense into db:" + error.message
      );
      return response.status(500).json({ error_message: error.message }); // { error_message: error.message } ni JSON data, internal server-error
    }
    response.status(201).json({ message: "Expense is registered." });
  });
});

// Get
router.get("", (request, response) => {
  const sql = "SELECT * FROM tb_expenses";
  db.query(sql, (error, result) => {
    if (error) {
      console.log(
        "error occured while inserting a new expense into db:" + error.message
      );
      return response.status(500).json({ error_message: error.message }); // { error_message: error.message } ni JSON data, internal server-error
    }
    console.log("Successfully executed a select query");
    response.json(result);
  });
});
// Get a single info by ID
router.get("/:id", (request, response) => {
  const id = request.params.id;
  const sql = "SELECT * FROM tb_expenses WHERE pk_id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      console.log(
        "error occured while inserting a new expense into db:" + error.message
      );
      return response.status(500).json({ error_message: error.message }); // { error_message: error.message } ni JSON data, internal server-error
    }
    console.log("Successfully executed a select query");
    response.json(result);
  });
});

//update PUT method

router.put("/:id", (request, response) => {
  const id = request.params.id;
  const sql =
    "UPDATE tb_expenses SET c_date =? c_description =? fk_expense_type=? c_amount = ? WHERE pk_id = ?";
  const { date, description, type, amount } = req.body; //orj irj bga info awj bga
  db.query(sql, [date, description, type, amount, id], (error, result) => {
    // db iin query gedeg method duudaj ogj bn 3 params awj bn
    if (error) {
      console.log(
        "error occured while inserting a new expense into db:" + error.message
      );
      return response.status(500).json({ error_message: error.message }); // { error_message: error.message } ni JSON data, internal server-error
    }
    response.json({ message: "Expense is updated." });
  });
});
//delete method
router.delete("/:id", (request, response) => {
  const id = request.params.id;
  const sql = "DELETE FROM tb_expenses WHERE pk_id =?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      console.log(
        "error occured while inserting a new expense into db:" + error.message
      );
      return response.status(500).json({ error_message: error.message }); // { error_message: error.message } ni JSON data, internal server-error
    }
    console.log("Successfully deleted query");
    response.json({ message: "Expense is deleted" });
  });
});

module.exports = router;
