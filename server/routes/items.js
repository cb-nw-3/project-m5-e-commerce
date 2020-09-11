/**
  Endpoints related to item retrieval
*/
const router = require("express").Router();
const items = require("../data/items.json");

router.get("/api/items/:category", (req, res) => {
  const category = req.params.category;

  const categorizedItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return res.status(200).json(categorizedItems);
});

router.get("/api/item/:id", (req, res) => {
  const itemId = req.params.id;

  const item = items.find((item) => item._id == itemId);

  if (!item) return res.status(404).send("Not found");
  else return res.status(200).json(item);
});

module.exports = router;
