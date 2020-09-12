import { combineReducers } from "redux";

import counterReducer from "./Counter";

const allReducers = combineReducers({
    counter: counterReducer
});

export default allReducers;