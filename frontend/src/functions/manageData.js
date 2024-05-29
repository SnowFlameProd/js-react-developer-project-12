import axios from 'axios';
import routes from "../routes/routes";

export const sendLoginData = (data) => axios.post(routes.server.login, data);

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