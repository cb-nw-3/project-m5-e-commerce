import produce from "immer";
import { combineReducers } from "redux";

const initialState = {
  items: [],
};

const initialCartState = {
  cartItems: {},
};

function items(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      return produce(state, (draftState) => {
        const index = draftState.items.items.findIndex(
          (item) => item._id == action.id
        );
        draftState.items[index].numInStock++;
      });
    }
    case "DECREMENT": {
      return produce(state, (draftState) => {
        const index = draftState.items.findIndex(
          (item) => item._id == action.id
        );
        draftState.items[index].numInStock--;
      });
    }
    case "RECEIVE_ITEMS": {
      console.log("RECEIVE_ITEMS");
      return produce(state, (draftState) => {
        draftState.items = action.items;
      });
    }
    default:
      return state;
  }
}

function cart(state = initialCartState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return produce(state, (draftState) => {
        console.log(action.item);
        // Check if we already have >=1 of these items
        const alreadyHasItem = draftState.cartItems.hasOwnProperty(
          action.item.id
        );

        if (alreadyHasItem) {
          draftState.cartItems[action.item.id].quantity++;
          console.log(draftState);
        } else {
          draftState.cartItems[action.item.id] = {
            ...action.item,
            quantity: 1,
          };
          console.log(draftState);
        }
      });
    }

    case "REMOVE_ITEM": {
      return produce(state, (draftState) => {
        delete draftState.cartItems[action.itemId];
      });
    }

    case "UPDATE_QUANTITY": {
      const { itemId, newQuantity } = action;

      return produce(state, (draftState) => {
        draftState.cartItems[itemId].quantity = newQuantity;
      });
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

export default combineReducers({ cart, items });

export const getItemArray = (state) => Object.values(state.cart.cartItems);
export const getSubtotal = (state) =>
  Object.values(state.cart.cartItems).reduce(
    (acc, item) => acc + parseFloat(item.price.substring(1)) * item.quantity,
    0
  );
