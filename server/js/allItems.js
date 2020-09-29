const items = require('../data/items.json')

const allItems = (req, res) => {
  res.json(items)
}

module.exports = allItems;