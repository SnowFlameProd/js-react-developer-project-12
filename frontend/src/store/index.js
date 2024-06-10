import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './slices/channelsSlice';
import messagesReducer from './slices/messagesSlice';
import uiSlice from './slices/uiSlice';
import authSlice from './slices/authSlice';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    ui: uiSlice,
    auth: authSlice,
  },
});
