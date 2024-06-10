import { createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channelsSlice';

const initialState = {
  modal: {
    isOpened: false,
    type: null,
    extra: null,
  },
  currentChannelId: null,
  defaultChannelId: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
    setDefaultChannelId: (state, { payload }) => {
      state.defaultChannelId = payload;
    },
    openModal: (state, { payload }) => {
      const { type } = payload;
      const extra = payload.extra ?? null;

      state.modal = {
        isOpened: true,
        type,
        extra,
      };
    },
    closeModal: (state) => {
      state.modal = initialState.modal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(channelsActions.addChannel, (state, { payload }) => {
      state.currentChannelId = payload.id;
    });
    builder.addCase(channelsActions.removeChannel, (state, { payload }) => {
      if (state.currentChannelId === payload) {
        state.currentChannelId = state.defaultChannelId;
      }
    });
  },
});

export const { actions } = uiSlice;
export default uiSlice.reducer;
