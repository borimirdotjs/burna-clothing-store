import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { MdRemoveCircle, MdAddCircle } from "react-icons/md";
import {
  removeFromCart,
  increaseCount,
  decreaseCount,
} from "../../../state/cartSlice";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return cart.map((item) => (
    <div className="cart-item-container">
      <div className="item-photo-container">
        <img src={item.product.photoUrl} alt="" />
      </div>
      <div className="cart-item-middle">
        <h4>{item.product.name}</h4>
        <div className="cart-item-control">
          <button
            disabled={item.count === 1}
            onClick={() => dispatch(decreaseCount(item))}
            className="control"
          >
            <MdRemoveCircle />
          </button>
          <span>{item.count}</span>
          <button
            onClick={() => {
              dispatch(increaseCount(item));
            }}
            className="control"
          >
            <MdAddCircle />
          </button>
        </div>
        <div className="price-cont">
          <span>${item.product.price * item.count}</span>
        </div>
      </div>
      <BsFillTrashFill
        onClick={() => dispatch(removeFromCart(item))}
        className="cart-item-delete"
      />
    </div>
  ));
};

export default CartItem;
