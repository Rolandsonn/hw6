import styles from "./Goods.module.css";
import GoodsItem from "../GoodsItem";
const Goods = ({ items }) => {
  const itemsElem = items.map((item) => <GoodsItem key={item.id} {...item} />);
  return (
    <>
      <ul className={styles.list}>{itemsElem}</ul>
    </>
  );
};

export default Goods;
