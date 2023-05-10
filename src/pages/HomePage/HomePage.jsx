import { useEffect } from "react";
import Goods from "../../components/goods";
import { useDispatch } from "react-redux";
import { fetchGoods } from "../../redux/slices/cartSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <div className="container">
      <Goods />
    </div>
  );
};

export default HomePage;
