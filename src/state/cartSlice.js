import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cart", "wishlist"],
};

const initialState = {
  isOpen: false,
  cart: [],
  wishlist: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        state.cart = state.cart.map((item) => {
          if (item.product.id === action.payload.id) {
            item.count++;
          }
          return item;
        });
      } else {
        state.cart.push({ product: action.payload, count: 1 });
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    addToWishlist: (state, action) => {
      const existingProductInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      const existingProductInCart = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductInCart) {
        toast.error("Product already in cart");
        return;
      }
      if (existingProductInWishlist) {
        state.wishlist = state.wishlist.map((item) => {
          if (item.id === action.payload.id) {
            toast.error("Product already in the wishlist");
          }
          return item;
        });
      } else {
        state.wishlist.push(action.payload);
        toast.success(`${action.payload.name} added to wishlist`);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },

    removeAllFromCart: (state) => {
      state.cart = [];
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
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

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const {
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  addToCart,
  removeFromCart,
  cartItemsCount,
  addToWishlist,
  removeAllFromCart,
} = cartSlice.actions;

export default persistedCartReducer;
