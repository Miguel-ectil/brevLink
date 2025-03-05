import axios from "axios";
import { getToken } from "./tokenService";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para adicionar o token na requisição
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exemplo de uma função para fazer uma requisição
export const getLinks = async () => {
  try {
    const response = await api.get("/links");
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar links");
  }
};

// Adicione outras funções para fazer POST, PUT, DELETE, etc.
