import "./CartMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../state/cartSlice";

const CartMenu = () => {
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      className="cart-background"
      style={
        isCartOpen
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
      onClick={() => dispatch(setIsCartOpen({}))}
    >
      <div className="cart-menu">
        <h2>THATS YOUR CART</h2>
      </div>
    </div>
  );
};

export default CartMenu;
