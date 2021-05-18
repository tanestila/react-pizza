import Categories from "../Components/Categories";
import Pizza from "../Components/Pizza";
import SortPopup from "../Components/SortPopup";

export default function Home({ items }) {
  console.log(items);
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
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <Pizza {...obj} />
        ))}
      </div>
    </div>
  );
}
