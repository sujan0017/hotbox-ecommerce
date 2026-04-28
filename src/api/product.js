import axios from "axios";
import config from "../config/config";

const getProduct = async ({
  sort = { createdAt: -1 },
  filters = {},
  limit = 10,
  page = 1,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(sort)}&filters=${JSON.stringify(filters)}&page=${page}`;

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response;
};

const getProductId = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response;
};

export { getProduct, getProductId };
