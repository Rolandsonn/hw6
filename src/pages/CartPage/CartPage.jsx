import styles from "./CartPage.module.css";
import Cart from "../../components/cart";
import { clearItems } from "../../redux/slices/cartSlice";

import deleteImg from "../../assets/img/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to clear the cart???")) {
      dispatch(clearItems());
    }
  };
  return (
    <>
      <div className="container">
        {items.length ? (
          <>
            <span onClick={handleDelete} className={styles.clear__btn}>
              <img className={styles.clear__img} src={deleteImg} alt="clear" />
            </span>

            <Cart />
          </>
        ) : (
          <>
            <div className={styles.wrapper}>
              <p className={styles.text}>Cart is empty</p>
              <Link className={styles.btn} to={"/"}>
                Go back purchasing
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
