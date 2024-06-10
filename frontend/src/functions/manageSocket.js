import { io } from 'socket.io-client';
import routes from '../routes/routes';
import { actions as channelsActions } from '../store/slices/channelsSlice';
import { actions as messagesActions } from '../store/slices/messagesSlice';

const socket = io();

export const initSocket = (dispatch) => {
  socket.on(routes.server.socket.newMessage, (payload) => dispatch(messagesActions.addMessage(payload)));
  socket.on(routes.server.socket.newChannel, (payload) => dispatch(channelsActions.addChannel(payload)));
  socket.on(routes.server.socket.removeChannel, (payload) => dispatch(channelsActions.removeChannel(payload.id)));
  socket.on(routes.server.socket.renameChannel, (payload) => dispatch(channelsActions.renameChannel({
    id: payload.id,
    changes: {
      name: payload.name,
    },
  })));
};
