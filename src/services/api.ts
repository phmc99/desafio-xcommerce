import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL,
});

export const getAllProducts = async (page = 1, perPage = 5) => {
  const { data } = await api.get(
    `/api/products?page=${page}&perPage=${perPage}`,
  );
  return data;
};
