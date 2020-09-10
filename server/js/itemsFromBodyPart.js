const items = require('../data/items.json')

const itemsFromBodyPart = (req, res) => {
  // grab url params
  let bodyPart = req.params.bodyPart;
  // filter items, case insensitive
  let filteredItems = items.filter(item => {
    return item.body_location.toLowerCase() === bodyPart.toLowerCase()
  })
  res.json(filteredItems)
}

module.exports = itemsFromBodyPart;