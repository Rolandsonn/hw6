import { useDispatch, useSelector } from "react-redux";
import styles from "./GoodsItem.module.css";
import { addItem } from "../../../redux/slices/cartSlice";
const GoodsItem = ({ image, price, name, id, category }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      image,
      name,
      price,
      category,
    };
    dispatch(addItem(item));
  };

  const cartItem = useSelector((state) =>
    state.cart.cart.find((obj) => obj.id === id)
  );

  const count = cartItem ? cartItem.count : 0;

  return (
    <>
      <li className={styles.item}>
        <img className={styles.img} src={image} alt={name} />
        <p>{name}</p>
        <div className={styles.wrapper}>
          <span>{Math.round(price)}$</span>

          <div className={styles.inner}>
            <span className={styles.btn} onClick={onClickAdd}>
              Add to cart
              {count ? <span className={styles.count}>{count}</span> : ""}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default GoodsItem;
