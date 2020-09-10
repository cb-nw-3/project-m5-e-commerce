const items = require('../data/items.json');
const companies = require('../data/companies.json');

const itemsFromBodyPart = (req, res) => {
  // grab url params
  let companyName = req.params.company.toLowerCase();
  // find company object
  let companyObject = companies.find(name => name.name.toLowerCase() === companyName)
  // find company id
  let companyId = companyObject['_id']
  // filter items, case insensitive
  let filteredItems = items.filter(item => {
    return item.companyId === companyId
  })
  res.json(filteredItems)
}

module.exports = itemsFromBodyPart;