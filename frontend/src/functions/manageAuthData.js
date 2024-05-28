import axios from 'axios';
import routes from "../routes/routes";

export const sendLoginData = (data) => axios.post(routes.server.login, data);