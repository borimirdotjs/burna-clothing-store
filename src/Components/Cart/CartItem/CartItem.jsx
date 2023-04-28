import styles from "./CartItem.module.css";
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
    <div className={styles.cart_item_container}>
      <div className={styles.photo_container}>
        <img src={item.product.photoUrl} alt="" />
      </div>
      <div className={styles.item_middle}>
        <h4>{item.product.name}</h4>
        <div className={styles.item_control}>
          <button
            disabled={item.count === 1}
            onClick={() => dispatch(decreaseCount(item))}
            className={styles.control}
          >
            <MdRemoveCircle />
          </button>
          <span>{item.count}</span>
          <button
            onClick={() => {
              dispatch(increaseCount(item));
            }}
            className={styles.control}
          >
            <MdAddCircle />
          </button>
        </div>
        <div className={styles.price}>
          <span>${item.product.price * item.count}</span>
        </div>
      </div>
      <BsFillTrashFill
        onClick={() => dispatch(removeFromCart(item))}
        className={styles.item_delete}
      />
    </div>
  ));
};

export default CartItem;
