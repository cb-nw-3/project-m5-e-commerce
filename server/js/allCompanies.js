const companies = require('../data/companies.json')

const allCompanies = (req, res) => {
  res.json(companies)
}

module.exports = allCompanies;