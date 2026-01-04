// store.js
import { createStore, combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";

// combineReducers dibuat agar nanti mudah tambah reducer lain (mis. auth, product, dll)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// createStore membuat store global Redux
const store = createStore(rootReducer);

export default store;
