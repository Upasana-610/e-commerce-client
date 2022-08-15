import React, { useState } from "react";
import { useEffect } from "react";

import { fetchAllCategory } from "../../../api/CategoryApi";
import CategoryBox from "../../../core/CategoryBox/CategoryBox";
import { Categoriescss, Heading } from "./Categories.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {
  let [categories, setCategories] = useState([]);

  const getcategory = async () => {
    try {
      const value = await fetchAllCategory();

      setCategories(value.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcategory();
  }, []);
  return (
    <>
      <Heading>Categories</Heading>
      <Categoriescss>
        {categories.length
          ? categories.map((item, idx) => (
              <CategoryBox key={idx} category={item} />
            ))
          : new Array(21)
              .fill(100)
              .map((item, idx) => (
                <Skeleton width={450} height={350} key={idx} />
              ))}
      </Categoriescss>
    </>
  );
};

//

export default Categories;
