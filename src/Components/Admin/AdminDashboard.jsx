import AdminNav from "./AdminNav/AdminNav";
import NewItem from "./NewItem";
import styles from "./AdminDashboard.module.css";
import { Routes, Route } from "react-router-dom";
import AdminAnnouncement from "./AdminAnnouncement/AdminAnnouncement";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminProductList from "./AdminProductList/AdminProductList";

const AdminDashboard = () => {
  return (
    <div className={styles.admin_dashboard}>
      <AdminNav />
      <Routes>
        <Route path={""} element={<h4>Please select a field</h4>} />
        <Route path={"new-item"} element={<NewItem />} />
        <Route path={"announcement"} element={<AdminAnnouncement />} />
        <Route path={"orders"} element={<AdminOrders />} />
        <Route path={"product-list"} element={<AdminProductList />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
