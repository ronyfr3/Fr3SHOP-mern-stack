import { combineReducers } from "redux";
import { ProductReducer, ProductDetailsReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";
// import { AuthReducer } from "./AuthReducer";

export const reducers = combineReducers({
  products: ProductReducer,
  productDetails: ProductDetailsReducer,
  cart: cartReducer,
  // auth: AuthReducer,
});
