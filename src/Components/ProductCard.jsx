import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import "./ProductCard.css";
import { SplideSlide } from "@splidejs/react-splide";

const ProductCard = () => {
  const { data } = useContext(ProductContext);
  console.log(data);

  return (
    <>
      {data.map((product, index) => {
        return (
          <SplideSlide key={index}>
            <div className="card" key={index}>
              <div className="product-photo">
                <img src={product.photoUrl} alt="" />
              </div>
              <h2>{product.name}</h2>
              <div className="price-container">
                <span>${product.price}</span>
              </div>
              <div className="text-container">
                <p>{product.description}</p>
              </div>
              <button>Add to cart</button>
            </div>
          </SplideSlide>
        );
      })}
    </>
  );
};

export default ProductCard;
