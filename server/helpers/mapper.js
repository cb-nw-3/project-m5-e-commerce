const companies = require("../data/companies.json");

const addCompanyInfoMapper = (single, ...items) => {
  // Attach company info to each item
  const itemWithCompanyInfo = items.map((item) => {
    const company = companies.find((company) => company._id === item.companyId);
    // Delete item.companyId as this info will be available in the company object
    delete item.companyId;
    // Add company info to item object
    item.company = company;
    return item;
  });
  // If single, this function returns an item object else it returns the whole array of item object
  if (single) return itemWithCompanyInfo[0];
  else return itemWithCompanyInfo;
};

module.exports = {
  addCompanyInfoMapper,
};
