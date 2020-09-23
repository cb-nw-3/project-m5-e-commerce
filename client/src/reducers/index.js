import produce from "immer";

const initialState = {
  items: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return produce(state, (draftState) => {
        console.log(action.item);
        // Check if we already have >=1 of these items
        const alreadyHasItem = draftState.items.hasOwnProperty(action.item.id);

        if (alreadyHasItem) {
          draftState.items[action.item.id].quantity++;
          console.log(draftState);
        } else {
          draftState.items[action.item.id] = {
            ...action.item,
            quantity: 1,
          };
          console.log(draftState);
        }
      });
    }

    case "REMOVE_ITEM": {
      return produce(state, (draftState) => {
        delete draftState.items[action.itemId];
      });
    }

    case "UPDATE_QUANTITY": {
      const { itemId, newQuantity } = action;

      return produce(state, (draftState) => {
        draftState.items[itemId].quantity = newQuantity;
      });
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

export const getItemArray = (state) => Object.values(state.items);
export const getSubtotal = (state) =>
  getItemArray(state).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
