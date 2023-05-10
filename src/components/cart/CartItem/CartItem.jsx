import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import {
  deleteItems,
  addItem,
  minusItem,
} from "../../../redux/slices/cartSlice";

export default function CartItem({ id, image, name, price, count }) {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteItems(id));
      console.log(deleteItems(id));
    }
  };

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <img className={styles.img} src={image} alt={name} />
          <p className={styles.text}>{name}</p>
        </div>

        <p className={styles.text}>{Math.round(price)}$</p>

        <span>
          <i onClick={onClickMinus}>-</i>
          {count}шт.
          <i onClick={onClickPlus}>+</i>
        </span>

        <button className={styles.delete__btn} onClick={onClickDelete}>
          delete
        </button>
      </div>
    </li>
  );
}
