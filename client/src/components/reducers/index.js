import { combineReducers } from "redux";

import counterReducer from "./Counter";
import modalTogglerReducer from "./ToggleModal";

const allReducers = combineReducers({
  counter: counterReducer,
  modal: modalTogglerReducer,
});

export default allReducers;
