import styles from "./Goods.module.css";
import GoodsItem from "../GoodsItem";
import { useSelector } from "react-redux";
const Goods = () => {
  const items = useSelector((state) => state.cart.items);
  const itemsElem = items.map((item) => <GoodsItem key={item.id} {...item} />);
  return (
    <>
      <ul className={styles.list}>{itemsElem}</ul>
    </>
  );
};

export default Goods;
