import CartItem from "../CartItem";
import { useSelector } from "react-redux";
import styles from "./CartList.module.css";
export default function CartList() {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {items.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </>
  );
}
