import "./App.css";
import { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Women from "./Components/Products/Women/Women";
import Accessories from "./Components/Products/Accessories/Accessories";
import Men from "./Components/Products/Men/Men";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Checkout from "./Components/Checkout/Checkout";
import Wishlist from "./Components/Wishlist/Wishlist";

// Protected Routes
import AdminProtectedRoute from "./routers/AdminProtectedRoute";
import UserProtectedRoute from "./routers/UserProtectedRoute";

//
import { useDispatch } from "react-redux";
import { setProducts } from "./state/productSlice";
import { db } from "./Firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

// Layouts
import RootLayout from "./Components/RootLayout/RootLayout";
import HomeLayout from "./Components/HomeLayout/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="men" element={<Men />} />/
      <Route path="women" element={<Women />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route
        path="/admin/*"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <UserProtectedRoute>
            <Checkout />
          </UserProtectedRoute>
        }
      />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      let productList = [];
      snapshot.forEach((doc) => productList.push(doc.data()));
      dispatch(setProducts(productList));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
