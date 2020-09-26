import { combineReducers } from "redux";

import purchaseReducer from "./Purchase";
import modalTogglerReducer from "./ToggleModal";
import getItemsReducer from "./ItemGetter";

const allReducers = combineReducers({
  itemList: getItemsReducer,
  purchase: purchaseReducer,
  modal: modalTogglerReducer,
});

export default allReducers;
