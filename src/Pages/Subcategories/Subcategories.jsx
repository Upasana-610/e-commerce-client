import React from "react";
import { useParams } from "react-router-dom";
import Productlist from "../../components/Collections/Productslist/Productlist";
import Layout from "../../Layout/Layout";

const Subcategories = () => {
  let params = useParams();
  return (
    <>
      <Layout>
        <Productlist type={params.item} />
      </Layout>
    </>
  );
};

export default Subcategories;
