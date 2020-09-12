const initialState = {
    numberOfItems: 1
}

const counterReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'INCREMENT': {
            return {
                numberOfItems: newState.numberOfItems + 1
            }
        }

        case 'DECREMENT': {
            if (newState.numberOfItems > 1)
                return {
                    numberOfItems: newState.numberOfItems - 1
                }
        }

        default: {
            return state;
        }
    }
};

export default counterReducer;