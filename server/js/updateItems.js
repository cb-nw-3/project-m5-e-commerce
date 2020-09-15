const items = require('../data/items.json');

const updateItems = (req, res) => {
  const cartData = req.body;

  let indexArray = [];

  // find index of each item in data
  // update quantity of each item

  res.status(200).send({ status: 'success', })
}

module.exports = updateItems;