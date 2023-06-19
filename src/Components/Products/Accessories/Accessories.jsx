import styles from "./Accessories.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";

const Accessories = () => {
  return (
    <>
      <Categories />

      <div className={styles.container}>
        <div className={styles.cards}>
          <ProductCard category={"accessories"} />
        </div>
      </div>
    </>
  );
};

export default Accessories;
