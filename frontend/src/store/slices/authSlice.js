import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: JSON.parse(localStorage.getItem('user'))?.token ?? null,
  username: JSON.parse(localStorage.getItem('user'))?.username ?? null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.username;
    },
    logout: (state, { payload }) => {
      state.token = null;
      state.username = null;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
