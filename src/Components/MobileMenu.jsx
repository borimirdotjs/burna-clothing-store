import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggle, setToggle }) => {
  return (
    <div
      className="mobile-menu-container"
      style={
        toggle
          ? { transform: "translateX(0)" }
          : { transform: "translateX(100%)" }
      }
    >
      <div className="menu-links">
        <ul onClick={() => setToggle(false)}>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/cart">View Cart</Link>
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
  );
};

export default MobileMenu;
