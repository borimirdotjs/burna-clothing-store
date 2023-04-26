import "./App.css";
import Announcement from "./Components/Announcement";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import FeaturedProducts from "./Components/FeaturedProducts";
import Nav from "./Components/Nav";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Women from "./Components/Products/Women/Women";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Toaster } from "react-hot-toast";
import AdminProtectedRoute from "./routers/AdminProtectedRoute";
import UserProtectedRoute from "./routers/UserProtectedRoute";
import CartMenu from "./Components/Cart/CartMenu";
import { useDispatch } from "react-redux";
import { setProducts } from "./state/productSlice";
import { useEffect, useRef } from "react";
import { db } from "./Firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Checkout from "./Components/Checkout/Checkout";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import Wishlist from "./Components/Wishlist/Wishlist";
import Men from "./Components/Products/Men/Men";
import Accessories from "./Components/Products/Accessories/Accessories";

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
      <Toaster />
      <Nav />
      <Announcement />
      <CartMenu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories />
              <Banner />
              <FeaturedProducts />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/men" element={<Men />} />/
        <Route path="/women" element={<Women />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
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
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
