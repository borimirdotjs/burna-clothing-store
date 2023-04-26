import "./Women.css";
import ProductCard from "../../ProductCard";
import Categories from "../../Categories";

const Women = () => {
  return (
    <>
      <Categories />
      <div className="women-container">
        <ProductCard category={"women"} />
      </div>
    </>
  );
};

export default Women;
