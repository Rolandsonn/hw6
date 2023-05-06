import styles from "./CartPage.module.css";
import Cart from "../../components/cart";
import { clearItems } from "../../redux/slices/cartSlice";

import deleteImg from "../../assets/img/delete.png";
import { useDispatch, useSelector } from "react-redux";
const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const handleDelete = () => {
    dispatch(clearItems());
  };
  return (
    <>
      <div className="container">
        {items.length ? (
          <span onClick={handleDelete} className={styles.clear__btn}>
            <img className={styles.clear__img} src={deleteImg} alt="clear" />
          </span>
        ) : (
          ""
        )}

        <Cart />
      </div>
    </>
  );
};

export default CartPage;
