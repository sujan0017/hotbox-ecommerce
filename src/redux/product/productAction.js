import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewProduct,
  getProduct,
  getProductCategories,
  getProductId,
} from "../../api/product";

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
const getProductByCategories = createAsyncThunk(
  "/product/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const addProduct = createAsyncThunk(
  "/product/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addNewProduct(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export { getAllProduct, getProductById, getProductByCategories, addProduct };
