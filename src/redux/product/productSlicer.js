import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct, getProductById } from "./productAction.js";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
    query: null,
  },
  reducers: {
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setSort: (state, action) => {
      state.query = { ...state.query, sort: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.action, filters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setLimit, setSort, setFilters } = productSlicer.actions;

export default productSlicer.reducer;
