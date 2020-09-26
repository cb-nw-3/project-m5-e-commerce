const initialState = {
  items: [],
  status: 'idle',
};

export default function shoppingItemsReducer(state = initialState, action) {
  switch (action.type) {

    case "RECEIVE_SHOPPING_ITEMS": {
      return {
        ...state,
        items: action.items,
        status: 'received',
      };
    }
    case "REQUEST_ITEMS": {
      return {
        ...state,
        status: 'loading',
      };
    }
    case "RECEIVE_ITEMS_ERROR": {
      return {
        ...state,
        status: 'error',
      };
    }

    default: {
      return state;
    }
  }
}

export const getShoppingItems = (state) => state.items;