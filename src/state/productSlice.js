import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "products",
  storage: storage,
  whitelist: ["products"],
};

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const persistedProductReducer = persistReducer(
  persistConfig,
  productSlice.reducer
);

export const { setProducts } = productSlice.actions;

export default persistedProductReducer;
