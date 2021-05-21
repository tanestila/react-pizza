import React from "react";

const Categories = React.memo(({ activeCategory, categories, onClick }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClick(null)}
        >
          Все
        </li>
        {categories.map((item, index) => (
          <li
            key={`${item}_${index}`}
            className={index === activeCategory ? "active" : ""}
            onClick={() => onClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
