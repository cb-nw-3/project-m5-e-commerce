import { combineReducers } from "redux";

import purchaseReducer from "./Purchase";
import modalTogglerReducer from "./ToggleModal";

const allReducers = combineReducers({
    purchase: purchaseReducer,
    modal: modalTogglerReducer,
});

export default allReducers;