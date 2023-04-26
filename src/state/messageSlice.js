import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "message",
  storage: storage,
  whitelist: ["message"],
};

const initialState = {
  message: "FREE DELIVERY ON FIRST ORDER 🔥",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.toUpperCase();
    },
    importMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

const persistedMessageReducer = persistReducer(
  persistConfig,
  messageSlice.reducer
);

export const { setMessage, importMessage } = messageSlice.actions;

export default persistedMessageReducer;
