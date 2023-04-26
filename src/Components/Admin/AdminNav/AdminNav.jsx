import { NavLink } from "react-router-dom";
import "./AdminNav.css";
import { FaTshirt } from "react-icons/fa";
import { MdAnnouncement, MdAddCircle } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";

const AdminNav = () => {
  return (
    <div className="admin-nav-container">
      <h3>Admin Dashboard</h3>
      <ul>
        <NavLink to={"new-item"} className="admin-nav-link">
          <div className="admin-nav-button">
            <MdAddCircle className="admin-link-icon" />
            <li>Add New Product</li>
          </div>
        </NavLink>

        <NavLink to={"announcement"} className="admin-nav-link">
          <div className="admin-nav-button">
            <MdAnnouncement className="admin-link-icon" />
            <li>Announcement</li>
          </div>
        </NavLink>
        <NavLink to={"product-list"} className="admin-nav-link">
          <div className="admin-nav-button">
            <FaTshirt className="admin-link-icon" />
            <li>Products</li>
          </div>
        </NavLink>
        <NavLink to={"orders"} className="admin-nav-link">
          <div className="admin-nav-button">
            <IoMdListBox className="admin-link-icon" />
            <li>Orders</li>
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNav;
