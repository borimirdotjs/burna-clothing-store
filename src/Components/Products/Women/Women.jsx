import styles from "./Women.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../../HomeLayout/Categories/Categories";

const Women = () => {
  return (
    <>
      <Categories />
      <div className={styles.container}>
        <ProductCard category={"women"} />
      </div>
    </>
  );
};

export default Women;
