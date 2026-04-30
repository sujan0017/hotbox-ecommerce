import api from "./api";

const getProduct = async ({
  sort = { createdAt: -1 },
  filters = {},
  limit = 10,
  page = 1,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(sort)}&filters=${JSON.stringify(filters)}&page=${page}`;

  const response = await api.get(`/products?${query}`);

  return response;
};

const getProductId = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response;
};

const getProductCategories = async () => {
  const response = await api.get(`/products/categories`);

  return response;
};

const addNewProduct = async ({ name, category, brand, price }) => {
  const response = await api.post("/products", {
    name,
    category,
    brand,
    price,
  });

  return response;
};

const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);

  return response;
};

export {
  getProduct,
  getProductId,
  getProductCategories,
  addNewProduct,
  deleteProduct,
};
