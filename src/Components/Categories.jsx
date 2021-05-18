import React from "react";
import { useState } from "react";

const Categories = React.memo(({ categories, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onChangeCategory = (index) => {
    setActiveIndex(index);
    onClick(index);
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
}, []);

export default Categories;
