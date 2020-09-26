export const increment = (id) => {
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
        category: category
    };
};

export const getNextPage = (items, category) => {
    return {
        type: "GETNEXTPAGE",
        items: items,
        category: category
    }
};

export const beginPurchaseProcess = (item, quantity) => {
    return {
        type: 'BEGIN-PURCHASE-PROCESS',
        item,
        quantity,
    };
};

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

