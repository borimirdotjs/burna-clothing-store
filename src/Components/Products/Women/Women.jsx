import styles from "./Women.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";
import Aside from "../Aside/Aside";

const Women = () => {
  return (
    <>
      <Categories />

      <div className={styles.container}>
        <Aside />
        <div className={styles.cards}>
          <ProductCard category={"women"} />
        </div>
      </div>
    </>
  );
};

export default Women;
