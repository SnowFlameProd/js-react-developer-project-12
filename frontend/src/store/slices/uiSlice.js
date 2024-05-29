import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modal: {
        isOpened: false,
        type: null,
        extra: null,
    },
    currentChannelId: null,
    defaultChannelId: null,
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
        openModal: (state, { payload }) => {
            state.modal = payload;
        },
        closeModal: (state) => {
            state.modal = initialState.modal;
        },
    },
});

export const { actions } = uiSlice;
export default uiSlice.reducer;