import { combineReducers } from "redux";

import cart from "./cart-reducers";
import bodyPart from "./bodypart-reducers";
import sort from "./sort-reducers";
import shoppingItems from "./shoppingItems-reducers";
import cartPurchase from "./cartPurchase-reducers";

export default combineReducers({
  cart,
  bodyPart,
  sort,
  shoppingItems,
  cartPurchase,
});
