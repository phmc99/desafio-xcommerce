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

export const getMostSaledProducts = async (page = 1, perPage = 6) => {
  const { data } = await api.get(
    `/api/mostsaled?page=${page}&perPage=${perPage}`,
  );
  return data;
};

export const getBySearch = async (search: string) => {
  const { data } = await api.get(`/api/products?search=${search}`);
  return data;
};
