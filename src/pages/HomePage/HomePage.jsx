import Goods from "../../components/goods";
import items from "../../goods.json";
const HomePage = () => {
  return (
    <div className="container">
      <Goods items={items} />
    </div>
  );
};

export default HomePage;
