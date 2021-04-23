import { useState } from "react";

export default function Categories({ categories, onClick }) {
  const [activeIndex, setActiveIndex] = useState();

  const onChangeCategory = (index) => {
    setActiveIndex(index);
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
