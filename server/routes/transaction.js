/**
  Endpoints related to transaction
*/

const router = require("express").Router();
const items = require("../data/items.json");

//ENDPOINT: - WILL SUBTRACT ITEM INVENTORY FROM DATABASE* STOCK AND RETURN UPDATED ITEM DETAILS TO ALLOW UPDATE IN REDUX
// - SEND IN ARRAY OF CART OBJECTS WITH ITEM AND QUANTITY IN REQ BODY w/ body:JSON.stringify({quantity:"", _id:""})
// - RETURNS ARRAY OF ITEM OBJECTS
router.patch("/api/updateStore", updateStoreHandler);

let sample = [
  { _id: "6588", quantity: "5" },
  { _id: "6589", quantity: "3" },
  { _id: "6610", quantity: "2" },
];

let example = JSON.stringify({ cart: sample });

function updateStoreHandler(req, res) {
  const cart = req.body;

  if (cart.length === 0) return res.status(404).send("Cart is empty");

  let updatedArray = [];
  cart.forEach((item) => {
    //retrieve items from items.json
    const id = item["_id"];
    const itemToUpdate = items.find((stockItem) => {
      return stockItem["_id"] == id;
    });

    //subtract item quanitity from stock
    itemToUpdate["numInStock"] -= item["quantity"];
    console.log("updated stock", itemToUpdate["numInStock"]);

    //return array of item objects
    updatedArray.push(itemToUpdate);
  });
  console.log("returning", updatedArray);
  return res.status(200).send(updatedArray);
}

module.exports = router;
