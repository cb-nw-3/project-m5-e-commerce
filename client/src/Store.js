import { createStore } from "redux";
import allReducers from "./components/reducers";

export default function configureStore(initialState) {
    const store = createStore(
        allReducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}