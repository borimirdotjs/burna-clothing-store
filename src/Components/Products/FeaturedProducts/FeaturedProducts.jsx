import React from "react";
import { Splide } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.css";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const featuredProducts = products.filter(
    (product) => product.category === "featured"
  );
  console.log(featuredProducts);

  return (
    <section className={styles.container}>
      <Splide
        className={styles.splide}
        options={{
          perPage: 5,
          fixedWidth: "300px",
          gap: "10px",
          perMove: 2,
          autoplay: true,
          interval: 8000,
          pauseOnHover: true,
          type: "loop",
        }}
      >
        <ProductCard category={"featured"} />
      </Splide>
    </section>
  );
};

export default FeaturedProducts;
