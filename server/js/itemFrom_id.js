const items = require('../data/items.json');

const itemsFrom_id = (req, res) => {
  // grab url params and turn it into integer number
  let item_id = parseInt(req.params._id);
  // filter items
  let filteredItems = items.filter(item => {
    return item._id === item_id;
  })
  res.json(filteredItems)
}

module.exports = itemsFrom_id;