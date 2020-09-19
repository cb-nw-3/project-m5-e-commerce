const items = require("../data/items.json");

const calculateCartTotal = (req, res) => {
  const cartData = req.body;
  const cartItemsAdded = cartData.state;
  let total = 0;
  cartItemsAdded.forEach((item) => {
    const priceString = item.price.substring(1);
    //to remove first chara or dollar sign in front
    const priceToNumbers = parseFloat(priceString);
    total += priceToNumbers;
  });
  // find index of each item in data
  // update quantity of each item
  res.status(200).send({ status: total });
};

module.exports = calculateCartTotal;
