import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Pizza, LoadingBlock, SortPopup } from "../Components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortNames = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

export default function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzasReducer }) => pizzasReducer);
  const { sortBy, category } = useSelector(
    ({ filtersReducer }) => filtersReducer
  );

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [sortBy, category]);

  const onClickCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onClickSort = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categories={categoryNames}
          activeCategory={category}
          onClick={onClickCategory}
        />
        <SortPopup
          sorts={sortNames}
          activeSortType={sortBy}
          onClick={onClickSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <Pizza key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}
