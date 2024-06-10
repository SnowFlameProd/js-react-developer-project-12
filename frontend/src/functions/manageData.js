import axios from 'axios';
import routes from '../routes/routes';

export const sendLoginData = (data) => axios.post(routes.server.login, data);

export const createNewUser = (data) => axios.post(routes.server.signup, data);

export const getChannels = (token) => axios.get(routes.server.channels, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getMessages = (token) => axios.get(routes.server.messages, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const addMessage = (data, token) => axios.post(routes.server.messages, data, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const addChannel = (data, token) => axios.post(routes.server.channels, data, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const editChannel = (data, id, token) => axios.patch(`${routes.server.channels}/${id}`, data, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const deleteChannel = (id, token) => axios.delete(`${routes.server.channels}/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
