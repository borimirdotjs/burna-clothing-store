import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "./FeaturedProducts.css";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section>
      <Splide
        options={{
          gap: "1rem",
          perPage: 5,
          breakpoints: {
            1350: {
              perPage: 4,
            },
            1100: {
              perPage: 3,
            },
            800: {
              perPage: 2,
            },
            550: {
              perPage: 1,
            },
          },
        }}
      >
        <ProductCard />
      </Splide>
    </section>
  );
};

export default FeaturedProducts;
