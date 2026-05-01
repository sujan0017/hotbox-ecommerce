import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlicer";
import productReducer from "./product/productSlicer";
import cartReducer from "./cart/cartSlicer"

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
