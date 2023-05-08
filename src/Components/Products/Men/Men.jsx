import styles from "./Men.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";
import Aside from "../Aside/Aside";

const Men = () => {
  return (
    <>
      <Categories />

      <div className={styles.container}>
        <Aside />
        <div className={styles.cards}>
          <ProductCard category={"men"} />
        </div>
      </div>
    </>
  );
};

export default Men;
