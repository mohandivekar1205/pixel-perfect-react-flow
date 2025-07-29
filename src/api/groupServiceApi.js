import axios from 'axios';

const BASE_URL_GROUP = 'http://localhost:8084/api/groups';

// ---------- GROUP SERVICE ----------
export const createGroup = async (groupData) => {
  return axios.post(`${BASE_URL_GROUP}/createGroup`, groupData);
};

export const sendGroupMessage = async (messageData) => {
  return axios.post(`${BASE_URL_GROUP}/message`, messageData);
};

export const getGroupMessages = async (groupId) => {
  return axios.get(`${BASE_URL_GROUP}/${groupId}/messages`);
};
