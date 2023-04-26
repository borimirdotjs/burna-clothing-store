import "./ProductCard.css";
import { SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { addToCart } from "../state/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { addToWishlist } from "../state/cartSlice";

const ProductCard = ({ category }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.cart.wishlist);

  return (
    <>
      {products.map((product) => {
        const handleAddToCart = () => {
          dispatch(addToCart(product));
          toast.success(`${product.name} added to your cart`);
        };

        const handleAddToWishlist = () => {
          dispatch(addToWishlist(product));
        };

        const shortUrl = product.id.slice(0, 11);

        if (product.category === category) {
          return (
            <SplideSlide key={product.id}>
              <div className="card" key={product.id}>
                <div
                  className="product-photo"
                  onClick={() => navigate(`/products/${shortUrl}`)}
                >
                  <img src={product.photoUrl} alt="" />
                </div>
                <h2>{product.name}</h2>
                <div className="price-container">
                  <span>${product.price}</span>
                </div>
                <div className="text-container">
                  <p>{product.description}</p>
                </div>
                <div className="product-card-buttons">
                  {wishlist.some((item) => item.id === product.id) ? (
                    <AiFillHeart
                      className="heart-icon"
                      onClick={handleAddToWishlist}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="heart-icon"
                      onClick={handleAddToWishlist}
                    />
                  )}
                  <button onClick={handleAddToCart}>Add to cart</button>
                </div>
              </div>
            </SplideSlide>
          );
        }
      })}
    </>
  );
};

export default ProductCard;
