import { combineReducers } from "redux";

import purchaseReducer from "./Purchase";

const allReducers = combineReducers({
    purchase: purchaseReducer
});

export default allReducers;