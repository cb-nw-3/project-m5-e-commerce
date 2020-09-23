const initialState = {
  // items is a matrix [[],[],[],[]]
  items: [],
  category: 'lifestyle',
  showViewMore: true
};

const getItemsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GETFIRSTPAGE": {
      return {
          items: action.items,
          category: action.category,
          showViewMore: action.items[action.items.length - 1].length === 4
      };
    }
    case "GETNEXTPAGE": {
      return {
        items: action.items,
        category: action.category,
        showViewMore: action.items[action.items.length - 1].length === 4
    };
    }
    default: {
      return state;
    }
  }
};

export default getItemsReducer;
