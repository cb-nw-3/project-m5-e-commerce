const companies = require("../data/companies.json");

// single: determines if the function returns a single item or an array of items
// items: item array to map the company info
// Returns an item object or an array of item object
const addCompanyInfoMapper = (single, ...items) => {
  // Attach company info to each item
  const itemWithCompanyInfo = items.map((item) => {
    // Get company from companies data
    const company = companies.find((company) => company._id === item.companyId);

    // Create a copy of the item
    // Do not modify the shape of the original data
    const tempItem = { ...item };

    // Delete tempItem.companyId as this info will be available in the company object
    delete tempItem.companyId;

    // Add company info to item object
    tempItem.company = company;
    return tempItem;
  });
  // If single, this function returns an item object else it returns the whole array of item object
  if (single) return itemWithCompanyInfo[0];
  else return itemWithCompanyInfo;
};

module.exports = {
  addCompanyInfoMapper,
};
