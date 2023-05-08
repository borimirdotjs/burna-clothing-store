import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.css";
import { FaTshirt } from "react-icons/fa";
import { MdAnnouncement, MdAddCircle } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";

const AdminNav = () => {
  return (
    <div className={styles.container}>
      <h3>Admin Dashboard</h3>
      <ul>
        <NavLink
          to={"new-item"}
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
        >
          <div className={styles.nav_button}>
            <MdAddCircle className={styles.link_icon} />
            <li>Add New Product</li>
          </div>
        </NavLink>

        <NavLink
          to={"announcement"}
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
        >
          <div className={styles.nav_button}>
            <MdAnnouncement className={styles.link_icon} />
            <li>Announcement</li>
          </div>
        </NavLink>
        <NavLink
          to={"product-list"}
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
        >
          <div className={styles.nav_button}>
            <FaTshirt className={styles.link_icon} />
            <li>Products</li>
          </div>
        </NavLink>
        <NavLink
          to={"orders"}
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
        >
          <div className={styles.nav_button}>
            <IoMdListBox className={styles.link_icon} />
            <li>Orders</li>
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNav;
