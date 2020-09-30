const cleanPriceData = (items) => {

  items = items.map((element) => {
    let price_cleaned_string = element.price.replace("$", "");
    let price_float = parseFloat(price_cleaned_string);
    return { ...element, price: price_float };
  });



  return items;
};

module.exports = {
  cleanPriceData,
};
