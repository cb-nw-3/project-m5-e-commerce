const initialState = {
  // items is a matrix [[],[],[],[]]
  items: [],
};

const getItemsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GETFIRSTPAGE": {
      return {
          items: action.items
      };
    }
    default: {
      return state;
    }
  }
};

export default getItemsReducer;
