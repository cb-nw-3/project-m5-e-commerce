const items = require('../data/items.json')

const itemsFromInput = (req, res) => {
  let lookUpString = req.params.lookUpString;
  let filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(lookUpString.toLowerCase())
  })
  res.json(filteredItems)
}

module.exports = itemsFromInput;