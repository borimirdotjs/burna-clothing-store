import "./Men.css";
import ProductCard from "../../ProductCard";
import Categories from "../../Categories";

const Men = () => {
  return (
    <>
      <Categories />
      <div className="men-container">
        <ProductCard category={"men"} />
      </div>
    </>
  );
};

export default Men;
