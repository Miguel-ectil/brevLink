import axios from "axios";
import Cookies from "js-cookie"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para adicionar o token na requisição
// api.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Exemplo de uma função para fazer uma requisição

export const getLinks = async (userId: string) => {
  try {
    const response = await api.get(`/links?id=${userId}`); // Passa o ID na requisição
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar links:", error);
    throw new Error("Erro ao buscar links");
  }
};

// Adicione outras funções para fazer POST, PUT, DELETE, etc.
