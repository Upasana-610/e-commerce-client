import React from "react";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { ProductContainer } from "./AdminProduct.style";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DeleteSingleProduct } from "../../../api/ProductsApi";

const AdminProduct = ({ product, toggle, setToggle }) => {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <ProductContainer>
          <h3
            onClick={() => {
              navigate(`/productpage/${product._id}`);
            }}
          >
            view
          </h3>
          <img
            src={`/img/Products/Product1/${product.pImages[0]}`}
            alt="MainImg"
          ></img>
          <div>
            <p className="pName">{product.pName}</p>

            <p className="pName">Rs. {product.pPrice}</p>
            <p className="pName">Product Id: {product._id}</p>
          </div>
          <p className="delete">
            <AiFillDelete
              onClick={() => {
                DeleteSingleProduct(product._id);
                setToggle(!toggle);
              }}
            />
          </p>
        </ProductContainer>
      </div>
    </>
  );
};

export default AdminProduct;
