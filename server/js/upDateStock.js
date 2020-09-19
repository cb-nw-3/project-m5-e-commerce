const items = require("../data/items.json");

const upDateStock = (req, res) => {
  // req.body requests a body of info
  const purchasedStock = req.body.purchasedStock;
  // the value of the purchased stock is state and (data) means we have
  // defined the parts we are mapping over
  const updatedItems = purchasedStock.map((data) => {
    const foundItems = items.find((item) => {
      return item._id === data._id;
    });
    return { ...foundItems, quantity: foundItems.numInStock - data.quantity };
  });
  console.log(updatedItems);
  res.json(updatedItems);
};

module.exports = upDateStock;
