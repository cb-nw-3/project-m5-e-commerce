export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const toggleModal = () => {
  return {
    type: "TOGGLE",
  };
};

export const beginPurchaseProcess = (item) => {
    return {
        type: 'BEGIN-PURCHASE-PROCESS',
        item,
    };
};

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});