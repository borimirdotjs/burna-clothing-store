import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../Custom Hooks/useAuth";
import Categories from "../Categories";
import { useNavigate } from "react-router-dom";
import wishlistArt from "../../images/wishlist-art.svg";
import { addToCart } from "../../state/cartSlice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const wishlist = useSelector((state) => state.cart.wishlist);
  console.log(wishlist);

  return (
    <section className="wishlist-container">
      <Categories />
      <div className="wishlist-banner">
        <h2>
          <span className="wishlist-username">
            {currentUser &&
              currentUser.displayName &&
              currentUser.displayName.toUpperCase() + ","}{" "}
          </span>
          WE KNOW YOU WANT IT !
        </h2>
      </div>

      {wishlist.length < 1 && (
        <img className="wishlist-art" src={wishlistArt} />
      )}
      <div className="wishlist-page-container">
        {wishlist.map((item, index) => {
          const handleMoveToCart = () => {
            dispatch(addToCart(item));
          };
          return (
            <div key={item.id} className="wishlist-item">
              <p>{index + 1}</p>
              <img
                src={item.photoUrl}
                onClick={() => navigate(`/products/${item.id.slice(0, 11)}`)}
                alt="product"
              />
              <div className="wishlist-name-price">
                <h4>{item.name}</h4>
                <span>${item.price}</span>
              </div>
              <button onClick={handleMoveToCart} className="move-to-cart">
                Move to Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wishlist;
