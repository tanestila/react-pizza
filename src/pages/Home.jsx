import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Pizza, LoadingBlock, SortPopup } from "../Components";
import { addPizzaToCart } from "../redux/actions/cart";
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
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

export default function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { sortBy, category } = useSelector(({ filters }) => filters);
  const cartItemsCount = useSelector(({ cart }) => cart.itemsCount);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [sortBy, category, dispatch]);

  const onClickCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onClickSort = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onClickAdd = useCallback(
    (pizza) => {
      dispatch(addPizzaToCart(pizza));
    },
    [dispatch]
  );

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
          activeSortType={sortBy.type}
          onClick={onClickSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <Pizza
                key={obj.id}
                cartCount={cartItemsCount[obj.id] ? cartItemsCount[obj.id] : 0}
                {...obj}
                onAdd={onClickAdd}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}
