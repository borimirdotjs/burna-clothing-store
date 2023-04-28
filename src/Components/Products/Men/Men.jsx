import styles from "./Men.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";

const Men = () => {
  return (
    <>
      <Categories />
      <div className={styles.container}>
        <ProductCard category={"men"} />
      </div>
    </>
  );
};

export default Men;
