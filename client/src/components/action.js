// import produce from "immer";
//This is the action we'll dispatch when the user clicks "Add to cart".

export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (itemId) => ({
  type: "REMOVE_ITEM",
  itemId,
});

export const updateQuantity = (itemId, newQuantities) => ({
  type: "UPDATE_QUANTITIES",
  itemId,
  newQuantities,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});
// export const removeItem = produce(state, (draftState) => {
//   draftState.addItem = type: "REMOVE_ITEM",
//   item,
// });

// const state = { hi: 5 };

// const newState = produce(state, (draftState) => {
//   draftState.hi = 6;
// });
