const initialState = {};

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN-PURCHASE-PROCESS': {
            return {
                ...state,
                selectedItemId: action.id,
                price: action.price,
                numInStock: action.numInStock,
                quantity: 1
            }
        }
        case 'INCREMENT': {
            const { id, newQuantity } = action;
            return {
                ...state,
                quantity: state.newQuantity + 1
            }
        }

        case 'DECREMENT': {
            if (state.quantity > 1)
                return {
                    ...state,
                    quantity: state.quantity - 1
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