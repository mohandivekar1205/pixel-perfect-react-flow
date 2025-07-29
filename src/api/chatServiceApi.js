import axios from 'axios';

const BASE_URL_CHAT = 'http://localhost:8082/auth/chat';

// ---------- CHAT SERVICE ----------
export const sendMessage = async (messageData) => {
  return axios.post(`${BASE_URL_CHAT}/send`, messageData);
};

export const getMessageHistory = async (senderId, receiverId) => {
  return axios.get(`${BASE_URL_CHAT}/history`, {
    params: { senderId, receiverId }
  });
};