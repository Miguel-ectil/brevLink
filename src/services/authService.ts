import axios from "axios";
import { saveToken, removeToken } from "./tokenService";

// URL do endpoint de autenticação
const AUTH_URL = "https://api.exemplo.com/login";

// Função para realizar o login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(AUTH_URL, { email, password });
    const token = response.data.token;

    if (token) {
      saveToken(token); // Armazena o token no localStorage
    }

    return response.data;
  } catch (error) {
    throw new Error("Erro ao realizar login");
  }
};

// Função para realizar logout
export const logout = () => {
  removeToken(); // Remove o token do localStorage
};
