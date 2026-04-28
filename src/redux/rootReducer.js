import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlicer";
import productReducer from "./product/productSlicer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
