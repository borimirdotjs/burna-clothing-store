import styles from "./Accessories.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";

const Accessories = () => {
  return (
    <>
      <Categories />
      <div className={styles.container}>
        <ProductCard category={"accessories"} />
      </div>
    </>
  );
};

export default Accessories;
