const initialState = {
  sorting: 'Alphabetically (A to Z)',
};

export default function sortReducer(state = initialState, action) {
  switch (action.type) {

    case "SELECT-SORT": {
      return {
        ...state,
        "sorting": action.option ,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSorting = (state) => state.sort.sorting;