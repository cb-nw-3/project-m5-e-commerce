const items = require('../data/items.json')

const itemsFromInput = (req, res) => {
  // grab url params
  let stringMatch = req.params.stringMatch;
  // filter items, case insensitive
  let filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(stringMatch.toLowerCase())
  })
  res.json(filteredItems)
}

module.exports = itemsFromInput;