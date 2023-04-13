import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  setItems,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
