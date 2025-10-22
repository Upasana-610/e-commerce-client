import React, { useState } from "react";
import { useEffect } from "react";

import { fetchAllCategory } from "../../../api/CategoryApi";
import CategoryBox from "../../../core/CategoryBox/CategoryBox";
import { Categoriescss, Heading } from "./Categories.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PacmanLoader } from "react-spinners";

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
          <PacmanLoader
            loading={true}
            color="#3BC6B0"
            cssOverride={{
              display: "block",
              margin: "20% auto",
              borderColor: "blue",
            }}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={40}
          />
        )}
      </Categoriescss>
    </>
  );
};

//

export default Categories;
