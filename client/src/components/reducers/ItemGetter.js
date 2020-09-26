const initialState = {
  // items is a matrix [[],[],[],[]]
  items: [],
  category: "lifestyle",
  showViewMore: true,
  filterApplied: false,
  filters: {
    name: "",
    location: "",
    company: "",
    price: 2000,
    limit: "max",
  },
  filterInfos: {
    locations: [],
    companies: [],
    limits: ["min", "max"],
  },
};

const getItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTER_INFO": {
      return {
        ...state,
        filterInfos: {
          locations: action.info.locations,
          companies: action.info.companies,
          limits: ["min", "max"],
        },
      };
    }
    case "SET_FILTERS": {
      return {
        ...state,
        filters: action.filters,
      };
    }
    case "SET_PRICE": {
      const newState = {
        ...state,
        filters: { ...state.filters, price: action.price },
      };
      return newState;
    }
    case "SET_NAME": {
      const newState = {
        ...state,
        filters: { ...state.filters, name: action.name },
      };
      // newState.filters.name = action.name;
      return newState;
    }
    case "SET_LOCATION": {
      const newState = {
        ...state,
        filters: { ...state.filters, location: action.location },
      };
      // newState.filters.location = action.location;
      return newState;
    }
    case "SET_COMPANY": {
      const newState = {
        ...state,
        filters: { ...state.filters, company: action.company },
      };
      // newState.filters.company = action.company;
      return newState;
    }
    case "SET_LIMIT": {
      const newState = {
        ...state,
        filters: { ...state.filters, limit: action.limit },
      };
      // newState.filters.limit = action.limit;
      return newState;
    }
    case "GETFIRSTPAGE": {
      return {
        ...state,
        items: action.items,
        category: action.category,
        showViewMore: action.items[action.items.length - 1].length === 4,
        filterApplied: false,
        filters: {
          name: "",
          location: "",
          company: "",
          price: 2000,
          limit: "max",
        },
      };
    }
    case "GETNEXTPAGE": {
      return {
        ...state,
        items: action.items,
        category: action.category,
        showViewMore: action.items[action.items.length - 1].length === 4,
      };
    }
    default: {
      return state;
    }
  }
};

export default getItemsReducer;
