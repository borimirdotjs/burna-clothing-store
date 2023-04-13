import "./App.css";
import Announcement from "./Components/Announcement";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import FeaturedProducts from "./Components/FeaturedProducts";
import Nav from "./Components/Nav";
import NewItem from "./Components/NewItem";
import ProductCard from "./Components/ProductCard";
import ProductContextProvider from "./ProductContext";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Toaster } from "react-hot-toast";
import AdminProtectedRoute from "./routers/AdminProtectedRoute";
import AdminDashboard from "./Components/AdminDashboard";
import CartMenu from "./Components/Cart/CartMenu";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
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
          <Route path="/men" element={<Mens />} />
          <Route path="/women" element={<Womens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
