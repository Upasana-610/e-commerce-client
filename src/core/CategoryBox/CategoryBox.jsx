import React from "react";
import { CategoryBoxcss, Heading } from "./CategoryBox.style";
import { useHistory } from "react-router-dom";

const CategoryBox = ({ category }) => {
  let history = useHistory();

  const handleClick = (item) => {
    history.push(`/collections/${item}`);
  };
  return (
    <CategoryBoxcss
      image={`/img/Category/${category.cName}/${category.cImage}`}
      onClick={() => {
        handleClick(category.cName);
      }}
    >
      <div className="img">
        <div className="layer"></div>
        <h3>
          {category.cName == "CoOrds"
            ? "Co-Ords"
            : category.cName == "BottomWear"
            ? "Bottom Wear"
            : category.cName}
        </h3>
      </div>
    </CategoryBoxcss>
  );
};

export default CategoryBox;
