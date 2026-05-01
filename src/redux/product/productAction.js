import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const deleteById = createAsyncThunk(
  "/product/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = deleteProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const editProductById = createAsyncThunk(
  "product/edit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editProduct(data._id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export {
  getAllProduct,
  getProductById,
  getProductByCategories,
  addProduct,
  deleteById,
  editProductById,
};
