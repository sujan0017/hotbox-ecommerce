import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  getAllProduct,
  getProductByCategories,
  getProductById,
} from "./productAction.js";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    selectedProduct: null,
    loading: false,
    error: null,
    query: null,
    add: {
      loading: false,
      success: false,
    },
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
      })

      .addCase(getProductByCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductByCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getProductByCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(addProduct.pending, (state) => {
        state.add.loading = true;
        state.add.success = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.add.success = true;
        state.add.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.add.loading = false;
        state.add.success = false;
      });
  },
});

export const { setLimit, setSort, setFilters } = productSlicer.actions;

export default productSlicer.reducer;
