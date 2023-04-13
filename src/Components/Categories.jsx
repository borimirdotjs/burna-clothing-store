import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { id: 100, name: "New & Featured", link: "" },
    { id: 200, name: "Men", link: "men" },
    { id: 300, name: "Women", link: "women" },
    { id: 400, name: "Accessories", link: "accessories" },
  ];
  return (
    <div className="category-container">
      <ul className="categories">
        {categories.map((category) => (
          <li className="cat" key={category.id}>
            <Link to={category.link}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
