import "./CartMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen, removeAllFromCart } from "../../state/cartSlice";
import { GrClose } from "react-icons/gr";
import CartItem from "./CartItem/CartItem";
import emptylist from "../../images/emptylist.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../Custom Hooks/useAuth";

const CartMenu = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const cart = useSelector((state) => state.cart.cart);
  const handleParentClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      dispatch(setIsCartOpen(false));
    }
  };

  const totalPrice = cart.reduce((accumulator, item) => {
    const count = item.count;
    const price = parseFloat(item.product.price);
    return accumulator + count * price;
  }, 0);

  const handleCheckout = () => {
    if (!currentUser) {
      dispatch(setIsCartOpen(false));
      navigate("/checkout");
      toast("Please log-in to continue", { icon: "🔑" });
    } else {
      dispatch(setIsCartOpen(false));
      navigate("./checkout");
    }
  };

  return (
    <div
      className="cart-background"
      style={
        isCartOpen
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
      onClick={handleParentClick}
    >
      <div className="cart-menu">
        <div className="cart-container">
          <div className="head">
            <GrClose
              onClick={() => dispatch(setIsCartOpen(false))}
              className="close"
            />
            <h3>Cart</h3>
            {cart.length > 0 && (
              <button
                onClick={() => dispatch(removeAllFromCart())}
                className="cart-clear-all"
              >
                Clear all
              </button>
            )}
          </div>
          {cart.length ? (
            <CartItem />
          ) : (
            <div className="empty-list-container">
              <img src={emptylist} alt="emptycart" />
              <h4 className="empty-cart">Cart is empty</h4>
            </div>
          )}
          {cart.length > 0 ? (
            <>
              <div className="subtotal">
                <h4>Subtotal</h4>
                <div className="subtotal-price-container">
                  <span className="subtotal-price">${totalPrice}</span>
                </div>
              </div>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
