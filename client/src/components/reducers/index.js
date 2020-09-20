import { combineReducers } from "redux";

import counterReducer from "./Counter";
import modalTogglerReducer from "./ToggleModal";
import getItemsReducer from "./ItemGetter";

const allReducers = combineReducers({
  counter: counterReducer,
  modal: modalTogglerReducer,
  itemList: getItemsReducer,
});

export default allReducers;
