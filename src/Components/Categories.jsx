import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";

export default function Categories({ categories }) {
  const dispatch = useDispatch();
  const activeIndex = useSelector(
    ({ filtersReducer }) => filtersReducer.category
  );
  const onChangeCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeIndex === null ? "active" : ""}
          onClick={() => onChangeCategory(null)}
        >
          Все
        </li>
        {categories.map((item, index) => (
          <li
            className={index === activeIndex ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
