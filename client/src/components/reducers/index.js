import { combineReducers } from "redux";

import purchaseReducer from "./Purchase";
import modalTogglerReducer from "./ToggleModal";
import getItemsReducer from "./ItemGetter";

const allReducers = combineReducers({
  counter: counterReducer,
  modal: modalTogglerReducer,
  itemList: getItemsReducer,
    purchase: purchaseReducer,
    modal: modalTogglerReducer,
});

export default allReducers;