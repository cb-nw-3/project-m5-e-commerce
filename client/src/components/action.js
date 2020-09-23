// FIRST WRITE OUR ACTIONS HERE
//This is the action we'll dispatch when the user clicks "Add to cart".
//this is the definition

export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item) => ({
  type: "UPDATE_QUANTITIES",
  item,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items,
})
