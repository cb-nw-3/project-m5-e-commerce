const filterItems = (filterObj, items) => {
  // Store all query parameters in an array
  const filterProps = Object.keys(filterObj);
  // Return an empty array if no filter is specified
  if (!filterProps || filterProps.length === 0) return [];

  let filteredItems = [...items];

  // Loop through each filter property to filter the array item
  filterProps.forEach((prop) => {
    // Switch to determine what filter is being applied
    switch (prop.toLowerCase()) {
      case "name": {
        filteredItems = filteredItems.filter((item) =>
          item.name.toLowerCase().includes(filterObj[prop].toLowerCase())
        );
        break;
      }
      case "price": {
        // Check if limit query parameter exists
        const validLimit =
          filterObj["limit"].toLowerCase() === "min" ||
          filterObj["limit"].toLowerCase() === "max";

        if (validLimit) {
          filteredItems = filteredItems.filter((item) =>
            comparePrice(
              item.price,
              filterObj[prop],
              filterObj["limit"].toLowerCase()
            )
          );
        } else {
          throw "Invalid limit value";
        }

        break;
      }
      case "location": {
        filteredItems = filteredItems.filter(
          (item) =>
            item.body_location.toLowerCase() === filterObj[prop].toLowerCase()
        );
        break;
      }
      case "company": {
        filteredItems = filteredItems.filter((item) =>
          item.company.name
            .toLowerCase()
            .includes(filterObj[prop].toLowerCase())
        );
        break;
      }
      case "category": {
        filteredItems = filteredItems.filter((item) =>
          item.category.toLowerCase().includes(filterObj[prop].toLowerCase())
        );
        break;
      }
    }
  });

  return filteredItems;
};

const comparePrice = (itemPrice, priceToCompare, limit) => {
  try {
    // Convert item price and price to compare to numbers
    const itemPriceParsed = parseFloat(itemPrice.replace("$", ""));
    const priceToCompareParsed = parseFloat(priceToCompare);

    // Make sure price is minimum 0
    if (priceToCompareParsed < 0) throw "Invalid price value";

    if (limit === "min") return itemPriceParsed >= priceToCompareParsed;
    else if (limit === "max") return itemPriceParsed <= priceToCompareParsed;
  } catch {
    throw "Invalid price value";
  }
};

module.exports = {
  filterItems,
};
