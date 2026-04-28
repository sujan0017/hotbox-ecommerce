import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct, getProductId } from "../../api/product";

const getAllProduct = createAsyncThunk(
  "product/list",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getProduct(query ?? {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const getProductById = createAsyncThunk(
  "/product/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProductId(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export { getAllProduct, getProductById };
