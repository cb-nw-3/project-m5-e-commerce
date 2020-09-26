const items = require("../data/items.json");

const upDateStock = (req, res) => {
  const purchasedStock = req.body.purchasedStock;
  const itemsIndex = [];
  let checker = true;
  // Look if client is trying to buy more than available items
  purchasedStock.forEach((data) => {
    const foundItem = items.find((item, index) => {
      // find index of cart items in data items
      if (item._id === data._id) {
        itemsIndex.push(index);
      }
      // return found item
      return item._id === data._id;
    });
    // check if found item numInStock is available
    if (data.quantity > foundItem.numInStock) {
      checker = false;
    }
  });
  // update data items
  if (checker) {
    itemsIndex.forEach((index, i) => {
      items[index].numInStock -= purchasedStock[i].quantity;
    });
    res.status(200).send({ status: "success" });
  } else {
    res.status(500).send({
      error: "Beware! You're trying to buy more items than there are available",
    });
  }
};

module.exports = upDateStock;
