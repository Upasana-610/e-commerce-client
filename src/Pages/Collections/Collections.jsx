import React from "react";
import { useParams } from "react-router-dom";
import Productlist from "../../components/Collections/Productslist/Productlist";
import { Heading } from "../../components/HomePage/Categories/Categories.style";

import Layout from "../../Layout/Layout";

const Collections = () => {
  let params = useParams();

  return (
    <>
      <Layout>
        <Heading>
          {params.item === "newarrivals"
            ? "New Arrivals"
            : params.item === "topsellers"
            ? "Top Sellers"
            : params.item === "BottomWear"
            ? "Bottom Wear"
            : params.item}
        </Heading>
        <Productlist type={params.item} />
      </Layout>
    </>
  );
};

export default Collections;
