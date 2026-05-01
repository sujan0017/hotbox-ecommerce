import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    product: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const existsIndex = state.product.findIndex(
        (p) => p._id === action.payload._id,
      );

      if (existsIndex !== -1) {
        state.product[existsIndex].quantity += 1;
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProductFromCart: (state, action) => {
      state.product = state.product.filter(
        (product) => product._id !== action.payload,
      );
    },

    productCartIncrement: (state, action) => {
      const item = state.product.find((p) => p._id === action.payload);
      if (item) item.quantity += 1;
    },

    productCartDecrement: (state, action) => {
      const item = state.product.find((p) => p._id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  productCartIncrement,
  productCartDecrement,
} = cartSlicer.actions;

export default cartSlicer.reducer;
