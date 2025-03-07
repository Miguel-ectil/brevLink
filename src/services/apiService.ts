import axios from "axios";
import Cookies from "js-cookie"; 

interface CreateLinkRequest {
  original_url: string;
  short_url: string;
  user_id: string;
}
interface Link {
  id: string;
  original_url: string;
  short_url: string;
  clicks: number;
}

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

export const createLink = async (originalUrl: string, customAlias: string, userId: string): Promise<Link> => {
  try {
    const shortUrl = `brev.ly/${customAlias}`; // Adiciona o prefixo fixo

    const payload: CreateLinkRequest = {
      original_url: originalUrl,
      short_url: shortUrl,
      user_id: userId,
    };

    const response = await api.post<Link>("/links/register", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar link:", error);
    throw new Error("Erro ao cadastrar link");
  }
};

// Adicione outras funções para fazer POST, PUT, DELETE, etc.
