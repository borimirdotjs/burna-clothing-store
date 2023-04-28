import styles from "./CartMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsCartOpen,
  removeAllFromCart,
  setCartTotal,
} from "../../state/cartSlice";
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
      dispatch(setCartTotal(totalPrice));
      navigate("./checkout");
    }
  };

  return (
    <div
      className={styles.background}
      style={
        isCartOpen
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
      onClick={handleParentClick}
    >
      <div className={styles.menu}>
        <div className={styles.container}>
          <div className={styles.head}>
            <GrClose
              onClick={() => dispatch(setIsCartOpen(false))}
              className={styles.close}
            />
            <h3>Cart</h3>
            {cart.length > 0 && (
              <button
                onClick={() => dispatch(removeAllFromCart())}
                className={styles.clear_all}
              >
                Clear all
              </button>
            )}
          </div>
          {cart.length ? (
            <CartItem />
          ) : (
            <div className={styles.empty_list_container}>
              <img src={emptylist} alt="emptycart" />
              <h4>Cart is empty</h4>
            </div>
          )}
          {cart.length > 0 ? (
            <>
              <div className={styles.subtotal}>
                <h4>Subtotal</h4>
                <div className={styles.price_container}>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <button onClick={handleCheckout} className={styles.checkout_btn}>
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
