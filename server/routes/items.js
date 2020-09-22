/**
  Endpoints related to item retrieval
*/
const router = require("express").Router();
const items = require("../data/items.json");
const { addCompanyInfoMapper } = require("../helpers/mapper");
const { filterItems, applySkipAndTake } = require("../helpers/utils");

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

  // Apply skip and take (One way paging)
  categorizedItems = applySkipAndTake(categorizedItems, req.query.skip, 16);

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
    // Convert price to number
    const returnItem = { ...item };
    returnItem.price = parseFloat(returnItem.price.replace('$', ''));
    return res.status(200).json(returnItem);
  }
});

router.get("/api/search", (req, res) => {
  // Get keyword parameter
  const keyWord = req.query.keyword;

  if (!keyWord) return res.status(400).send("Invalid keyword value");

  // Filter items by the search keyword
  let matches = items.filter((item) =>
    item.name.toLowerCase().includes(keyWord.toLowerCase())
  );

  // Attach company info to each item
  matches = addCompanyInfoMapper(false, ...matches);

  // Apply skip and take (One way paging)
  matches = applySkipAndTake(matches, req.query.skip, 16);

  // Should not return 404 if not match is found
  // instead, client should check if the returned array is empty
  return res.status(200).json(matches);
});

router.get("/api/filter", (req, res) => {
  // Create new array
  let tempItems = [...items];

  // Add company info to each item
  tempItems = addCompanyInfoMapper(false, ...tempItems);

  try {
    // filter the array using the query parameters
    tempItems = filterItems(req.query, tempItems);

    // Apply skip and take (One way paging)
    tempItems = applySkipAndTake(tempItems, req.query.skip, 16);

    return res.status(200).json(tempItems);
  } catch (error) {
    return res.status(409).send(error);
  }
});

module.exports = router;
