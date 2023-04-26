import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { addToCart, addToWishlist } from "../../../state/cartSlice";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.cart.wishlist);
  const params = useParams();
  const dispatch = useDispatch();
  console.log(wishlist);

  const product = products.find(
    (product) => product.id.slice(0, 11) === params.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`Added ${product.name} to your cart`);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="container">
      <div className="picture">
        <img src={product?.photoUrl} alt="product" />
      </div>
      <div className="product-info">
        <div className="product-name-price">
          <h3>{product?.name}</h3>
          <span>${product?.price}</span>
        </div>
        <p>{product?.description}</p>
        <div className="product-buttons">
          <button className="add-to-wishlist" onClick={handleAddToWishlist}>
            <AiTwotoneHeart />
            Add To Wishlist
          </button>
          <button className="product-add-to-cart" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
