import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import disableScroll from "disable-scroll";
import { GrClose } from "react-icons/gr";
import useAuth from "../../../Custom Hooks/useAuth";

const MobileMenu = ({ toggle, setToggle }) => {
  toggle ? disableScroll.on() : disableScroll.off();
  const { currentUser } = useAuth();
  console.log(currentUser);
  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setToggle(false);
    }
  };
  return (
    <div
      className={styles.background}
      style={
        toggle
          ? { transform: "translateX(0)" }
          : { transform: "translateX(100%)" }
      }
      onClick={handleMenuToggle}
    >
      <div className={styles.mobile_menu_container}>
        <GrClose className={styles.close} onClick={() => setToggle(false)} />
        <div className={styles.menu_links}>
          <ul onClick={() => setToggle(false)}>
            <li>
              <Link to={currentUser ? "/acount" : "/login"}>
                {currentUser ? "Account" : "Log In"}
              </Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
          <hr />
          <ul onClick={() => setToggle(false)}>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
