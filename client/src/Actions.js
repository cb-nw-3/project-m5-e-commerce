export const increment = (id) => {
    return {
        type: "INCREMENT",
        id: id,
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


export const getFirstPage = (items) => {
  return {
    type: "GETFIRSTPAGE",
    items: items
  };
};

export const beginPurchaseProcess = (item, quantity, numInStock) => {
    return {
        type: 'BEGIN-PURCHASE-PROCESS',
        item,
        quantity,
        numInStock,
    };
};

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

