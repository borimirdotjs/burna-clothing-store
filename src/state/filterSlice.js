import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage: storage,
  filters: ["cart", "wishlist"],
};

const initialState = {
  isOpen: false,
  cart: [],
  cartTotal: null,
  wishlist: [],
};
