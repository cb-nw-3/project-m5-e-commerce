import { combineReducers } from "redux";

import cart from "./cart-reducers";
import bodyPart from "./bodypart-reducers";
import sort from "./sort-reducers";

export default combineReducers({ cart, bodyPart, sort });