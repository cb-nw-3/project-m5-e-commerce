const initialState = {};

export const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN-PURCHASE-PROCESS': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: action.quantity,
                    numInStock: action.numInStock,
                    isAddedToCart: true,
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

export const getStoreItemsArray = (state) => Object.values(state.purchase);

export const getTotal = state =>
    getStoreItemsArray(state).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

console.log('***', getStoreItemsArray)


export default purchaseReducer;