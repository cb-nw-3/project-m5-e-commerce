const initialState = {
    isAddedToCart: false,
};

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN-PURCHASE-PROCESS': {
            return {
                ...state,
                isAddedToCart: true,
                [action.item.id]: {
                    ...action.item,
                    quantity: action.quantity,
                    numInStock: action.numInStock,
                },
            }
        }
        case 'INCREMENT': {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: state[action.id].quantity + 1,
                },
            }
        }

        case 'DECREMENT': {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: state[action.id].quantity - 1,
                },
            }
        }

        case 'REMOVE_ITEM': {
            const newCart = { ...state };
            delete newCart[action.id];
            return newCart;
        }

        case 'CLEAR_CART': {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export default purchaseReducer;