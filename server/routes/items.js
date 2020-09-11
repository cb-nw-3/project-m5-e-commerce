/**
  Endpoints related to item retrieval
*/
const router = require("express").Router();
const items = require("../data/items.json");

router.get("/api/items/:category", (req, res) => {
  // Normally stored on a db
  const validCategories = ["lifestyle", "fitness", "medical", "entertainment"];

  const category = req.params.category;
  // Return 404 Not found if category is invalid
  if (!validCategories.includes(category.toLowerCase()))
    return res.status(404).send("Not found");

  // Filter items by category
  const categorizedItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return res.status(200).json(categorizedItems);
});

router.get("/api/item/:id", (req, res) => {
  // Get id parameter
  const itemId = req.params.id;

  // Filter the items by the id
  const item = items.find((item) => item._id == itemId);

  // Check if item is null, if null return 404 else 200
  if (!item) return res.status(404).send("Not found");
  else return res.status(200).json(item);
});

module.exports = router;
