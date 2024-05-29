import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentChannelId: null,
    defaultChannelId: null
}

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
    }
});

export const { actions } = uiSlice;
export default uiSlice.reducer;