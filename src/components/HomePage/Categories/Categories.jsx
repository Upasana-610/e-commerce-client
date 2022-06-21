import React, { useState } from "react";
import { useEffect } from "react";

import { fetchAllCategory } from "../../../api/CategoryApi";
import CategoryBox from "../../../core/CategoryBox/CategoryBox";
import { Categoriescss, Heading } from "./Categories.style";

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
        {categories.length ? (
          categories.map((item, idx) => (
            <CategoryBox key={idx} category={item} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Categoriescss>
    </>
  );
};

//

export default Categories;
