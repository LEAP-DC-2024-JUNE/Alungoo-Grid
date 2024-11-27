const express = require("express");
const router = express.Router();
const Item = require("../models/item");

//Create

router.post("", async (req, res) => {
  try {
    const item = new Item(req.body); // gadnaas irsen body gaa awla
    const savedItem = await item.save(); //irsen bodygaa save hj bn, mongo await awdag
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Read All
router.get("", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Read a single item
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
      res.status(404).json({ message: "item not found" });
    } else {
      res.json(item);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Update item
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body);
    if (!updatedItem) {
      res.status(404).json({ message: "item not found" });
    } else {
      res.json(updatedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Delete item
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ message: "item not found" });
    } else {
      res.json(deletedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
