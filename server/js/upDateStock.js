const items = require("../data/items.json");

const upDateStock = (req, res) => {
  // req.body requests a body of info
  const purchasedStock = req.body.purchasedStock;
  // filter items
  const updatedItems = purchasedStock.forEach((data) => {
    return (
      items.find((item) => {
        return item._id === data._id;
      })[0].numInStock - data.quantity
    );
  });

  res.json(updatedItems);
};

module.exports = upDateStock;
