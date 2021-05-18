import { useSelector } from "react-redux";
import Categories from "../Components/Categories";
import Pizza from "../Components/Pizza";
import SortPopup from "../Components/SortPopup";

export default function Home() {
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categories={[
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
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
