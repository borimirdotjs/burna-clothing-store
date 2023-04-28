import React from "react";
import styles from "./Categories.module.css";
import { Link, NavLink } from "react-router-dom";

const Categories = () => {
  const categories = [
    { id: 100, name: "New & Featured", link: "" },
    { id: 200, name: "Men", link: "men" },
    { id: 300, name: "Women", link: "women" },
    { id: 400, name: "Accessories", link: "accessories" },
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category.id} onClick={category.handleClick}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={`/${category.link}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
