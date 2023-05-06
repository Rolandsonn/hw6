import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { deleteItems } from "../../../redux/slices/cartSlice";

export default function CartItem({ id, picture, name, price, count }) {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteItems(id));
      console.log(deleteItems(id));
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <img className={styles.img} src={picture} alt={name} />
          <p className={styles.text}>{name}</p>
        </div>

        <p className={styles.text}>{price}$</p>

        <span>{count}шт.</span>

        <button className={styles.delete__btn} onClick={onClickDelete}>
          delete
        </button>
      </div>
    </li>
  );
}
