import "./Accessories.css";
import ProductCard from "../../ProductCard";
import Categories from "../../Categories";

const Accessories = () => {
  return (
    <>
      <Categories />
      <div className="accessories-container">
        <ProductCard category={"accessories"} />
      </div>
    </>
  );
};

export default Accessories;
