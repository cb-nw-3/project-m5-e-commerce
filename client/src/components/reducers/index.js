import { combineReducers } from "redux";

import purchaseReducer from "./Purchase";
import modalTogglerReducer from "./ToggleModal";
import getItemsReducer from "./ItemGetter";

const allReducers = combineReducers({
  modal: modalTogglerReducer,
  itemList: getItemsReducer,
  purchase: purchaseReducer,
  modal: modalTogglerReducer,
});

export default allReducers;
