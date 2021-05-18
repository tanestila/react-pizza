import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Components/Categories";
import Pizza from "../Components/Pizza";
import SortPopup from "../Components/SortPopup";
import { setCategory } from "../redux/actions/filters";

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onClickCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} onClick={onClickCategory} />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <Pizza {...obj} />)}
      </div>
    </div>
  );
}
