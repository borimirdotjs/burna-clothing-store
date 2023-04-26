import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import persistedCartReducer from "./state/cartSlice";
import persistedProductReducer from "./state/productSlice";
import persistedMessageReducer from "./state/messageSlice";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    products: persistedProductReducer,
    message: persistedMessageReducer,
  },
});

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);
