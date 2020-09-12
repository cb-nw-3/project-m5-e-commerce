/**
  Endpoints related to item retrieval
*/
const router = require("express").Router();
const items = require("../data/items.json");
const { addCompanyInfoMapper } = require("../helpers/mapper");

router.get("/api/items/:category", (req, res) => {
  // Normally stored on a db
  const validCategories = [
    "lifestyle",
    "fitness",
    "medical",
    "entertainment",
    "industrial",
    "pets and animals",
  ];

  const category = req.params.category;
  // Return 404 Not found if category is invalid
  if (!validCategories.includes(category.toLowerCase()))
    return res.status(404).send("Not found");

  // Filter items by category
  let categorizedItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  // Add company information to each item object
  categorizedItems = addCompanyInfoMapper(false, ...categorizedItems);

  return res.status(200).json(categorizedItems);
});

router.get("/api/item/:id", (req, res) => {
  // Get id parameter
  const itemId = req.params.id;

  // Filter the items by the id
  let item = items.find((item) => item._id == itemId);

  // Check if item is null, if null return 404 else 200
  if (!item) {
    return res.status(404).send("Not found");
  } else {
    // Add company information to the item
    item = addCompanyInfoMapper(true, item);
    return res.status(200).json(item);
  }
});

module.exports = router;
