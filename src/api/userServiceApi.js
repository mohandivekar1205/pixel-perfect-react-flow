import axios from 'axios';

const BASE_URL_USERS = 'http://localhost:8083/api/users';

// ---------- USER SERVICE ----------
export const registerUser = async (userData) => {
  return axios.post(`${BASE_URL_USERS}/register`, userData);
};

export const loginUser = async (credentials) => {
  return axios.post(`${BASE_URL_USERS}/login`, credentials);
};

export const getAllUsers = async () => {
  return axios.get(`${BASE_URL_USERS}/getAll`);
};

export const getUserById = async (id) => {
  return axios.get(`${BASE_URL_USERS}/${id}`);
};

export const searchUser = async (query) =>{
  return axios.get(`${BASE_URL_USERS}/search?q=${query}`)
}