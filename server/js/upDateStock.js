const items = require("../data/items.json");

const upDateStock = (req, res) => {
  // req.body requests a body of info
  const purchasedStock = req.body.purchasedStock;
  // the value of the purchased stock is state and (data) means we have
  // defined the parts we are mapping over

  // Look if client is trying to buy more than available items
  purchasedStock.forEach((data) => {
    const foundItems = items.find((item) => {
      return item._id === data._id;
    });
    if (data.quantity > foundItems.numInStock) {
      throw new Error("Beware! You're trying to buy more items than there are available")
    }
    return { ...foundItems, numInStock: foundItems.numInStock - data.quantity };
  });

  const updatedItems = purchasedStock.map((data) => {
    const foundItems = items.find((item) => {
      return item._id === data._id;
    });
    return { ...foundItems, numInStock: foundItems.numInStock - data.quantity };
  });
  console.log(updatedItems);
  res.status(200).send({ status: 'success' });
};

module.exports = upDateStock;
