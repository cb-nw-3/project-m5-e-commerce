export const increment = (id) => {

  return {
    type: "INCREMENT",
    id: id,
  };
=======
    return {
        type: "INCREMENT",
        id,
    };

};

export const decrement = (id) => {
  return {
    type: "DECREMENT",
    id,
  };
};

export const toggleModal = () => {
  return {
    type: "TOGGLE",
  };
};

export const getFirstPage = (items, category) => {
  return {
    type: "GETFIRSTPAGE",
    items: items,
    category: category,
  };
=======
    return {
        type: "GETFIRSTPAGE",
        items: items,
        category: category
    };
};

export const getNextPage = (items, category) => {
  return {
    type: "GETNEXTPAGE",
    items: items,
    category: category,
  };
};


export const beginPurchaseProcess = (item, quantity, numInStock) => {
  return {
    type: "BEGIN-PURCHASE-PROCESS",
    item,
    quantity,
    numInStock,
  };

export const beginPurchaseProcess = (item, quantity) => {
    return {
        type: 'BEGIN-PURCHASE-PROCESS',
        item,
        quantity,
    };
};

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const getFilterInfo = (info) => ({
  type: "GET_FILTER_INFO",
  info: info,
});

export const setFilters = (filters) => ({
  type: "SET_FILTERS",
  filters: filters,
});

export const setPrice = (price) => ({
  type: "SET_PRICE",
  price: price,
});

export const setName = (name) => ({
  type: "SET_NAME",
  name: name,
});

export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location: location,
});

export const setCompany = (company) => ({
  type: "SET_COMPANY",
  company: company,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  limit: limit,
});

export const applyFilter = (items, filterApplied) => ({
  type: "APPLY_FILTER",
  items: items,
  filterApplied: filterApplied,
});

export const clearFilter = (items, filterApplied) => ({
  type: "CLEAR_FILTER",
  items: items,
  filterApplied: filterApplied,
});
