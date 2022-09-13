import React, { useState } from "react";
import { useEffect } from "react";
import { fetchAllProducts } from "../../api/ProductsApi";
import { v4 as uuidv4 } from "uuid";
import AdminProduct from "./AdminProduct/AdminProduct";
import Layout from "../../Layout/Layout";
import { StyledButton } from "./AdminHome/AdminHome.style";
import { useNavigate } from "react-router";

const AllProducts = () => {
  let [products, setProducts] = useState([]);
  let [toggle, setToggle] = useState(false);
  let navigate = useNavigate();

  const getProductData = async () => {
    try {
      const value = await fetchAllProducts();

      setProducts(value.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    getProductData();
  }, [toggle]);
  return (
    <Layout>
      <div
        style={{
          background: "rgb(254, 251, 251)",
          background:
            "linear-gradient(18deg,rgba(254, 251, 251, 1) 0%,rgba(223, 190, 137, 1) 58%)",
        }}
      >
        <StyledButton
          onClick={() => {
            navigate(`/admin`);
          }}
        >
          Insert Product
        </StyledButton>

        {products.map((item) => (
          <AdminProduct
            key={uuidv4()}
            product={item}
            toggle={toggle}
            setToggle={setToggle}
          />
        ))}
      </div>
    </Layout>
  );
};

export default AllProducts;
