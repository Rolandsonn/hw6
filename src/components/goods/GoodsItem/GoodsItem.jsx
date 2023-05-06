import { useDispatch, useSelector } from "react-redux";
import styles from "./GoodsItem.module.css";
import { addItem } from "../../../redux/slices/cartSlice";
const GoodsItem = ({ picture, price, name, id, color, category }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      picture,
      name,
      price,
      color,
      category,
    };
    dispatch(addItem(item));
  };

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const count = cartItem ? cartItem.count : 0;

  return (
    <>
      <li className={styles.item}>
        <img className={styles.img} src={picture} alt={name} />
        <p>{name}</p>
        <div className={styles.wrapper}>
          <span>{price}$</span>

          <div className={styles.inner}>
            {count ? <span className={styles.count}>{count}</span> : ""}
            <span className={styles.btn} onClick={onClickAdd}>
              Add to cart
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default GoodsItem;