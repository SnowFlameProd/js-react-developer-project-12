import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as channelsActions } from "./channelsSlice";

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState();

const slice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: messagesAdapter.addOne,
        addMessages: messagesAdapter.addMany,
    },
    extraReducers: (builder) => {
        builder.addCase(channelsActions.removeChannel, (state, action) => {
            const channelId = action.payload;
            const restEntities = Object.values(state.entities).filter((message) => message.channelId !== channelId);
            console.log(restEntities);
        });
    }
});

export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export const { actions } = slice;
export default slice.reducer;