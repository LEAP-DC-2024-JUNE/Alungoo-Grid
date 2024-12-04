const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

//Create

router.post("", itemController.createdItem);
//Read All

router.get("", itemController.getAllItems);
//Read a single item

router.get("/:id", itemController.getItemById);
//Update item

router.put("/:id", itemController.updateItem);
//Delete item

router.delete("/:id", itemController.deleteItem);
module.exports = router;
