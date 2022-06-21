import React from "react";
import { useParams } from "react-router-dom";
import Productlist from "../../components/Collections/Productslist/Productlist";

import Layout from "../../Layout/Layout";

const Collections = () => {
  let params = useParams();

  return (
    <>
      <Layout>
        <Productlist type={params.item} />
      </Layout>
    </>
  );
};

export default Collections;
