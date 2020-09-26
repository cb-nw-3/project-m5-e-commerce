const initialState = {};

export const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN-PURCHASE-PROCESS': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: action.quantity,
                    isAddedToCart: true,
                },
            }
        }
        case 'INCREMENT': {
            let incrementQuantity = state[action.id].quantity;
            if (state[action.id].quantity < state[action.id].numInStock) {
                incrementQuantity += 1;
            }
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: incrementQuantity,
                },
            }
        }

        case 'DECREMENT': {
            let decrementQuantity = state[action.id].quantity;
            if (state[action.id].quantity > 1) {
                decrementQuantity -= 1;
            }
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: decrementQuantity,
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

export const getStoreItemsArray = (state) => Object.values(state.purchase);

export const getTotal = state =>
    getStoreItemsArray(state).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

export default purchaseReducer;