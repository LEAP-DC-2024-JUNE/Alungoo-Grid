const express = require("express");
const router = express.Router();

let items = [];
let currentId = 1;

// POST method --> create a new item
router.post("", (req, res) => {
  const { name, description } = req.body;
  // const name = req.body.name
  const newItem = { id: currentId, ...req.body };
  currentId++;
  items.push(newItem); // storage ruu hadgalsan
  res.status(201).json(newItem);
});
//GET method -->read all items
router.get("", (req, res) => {
  res.json(items);
});
//GET method => read a single item by ID
router.get("/:id", (req, res) => {
  const selectedItem = items.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (!selectedItem) {
    return res.status(404).json({ message: "item not found" });
  } else {
    res.json(selectedItem);
  }
});

// Update a single item by ID
router.put("/:id", (req, res) => {
  const selectedItem = items.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (!selectedItem) {
    return res.status(404).json({ message: "item not found" });
  }
  const { name, description } = req.body;
  selectedItem.name = name;
  selectedItem.description = description;
  res.json(selectedItem);
});
// DELETE a single item by ID
router.delete("/:id", (req, res) => {
  const selectedItemIndex = items.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (selectedItemIndex === -1) {
    return res.status(404).json({ message: "item not found" });
  }
  items.splice(selectedItemIndex, 1);
  res.json({ message: "Item is deleted" });
});

module.exports = router;
