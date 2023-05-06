import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cart from "../../assets/img/cart.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((total, item) => total + item.count, 0);
  console.log(totalCount);

  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={"/cart"} className={styles.link__count}>
                <span>{totalPrice}$</span>
                <img className={styles.img} src={cart} alt="cart" />
                <span>{totalCount ? totalCount : ""}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
