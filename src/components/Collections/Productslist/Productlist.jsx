import React, { useEffect, useState } from "react";
import { fetchAllCategory } from "../../../api/CategoryApi";
import { useDispatch, useSelector } from "react-redux";
import ProductBox from "../../../core/ProductBox/ProductBox";
import { fetchAllProducts } from "../../../redux";
import { Productlistcss } from "./Productslist.style";
import {
  Categoriescss,
  Heading,
} from "../../HomePage/Categories/Categories.style";
import uuid from "react-uuid";
import { CategoryBoxcss } from "../../../core/CategoryBox/CategoryBox.style";
import { useNavigate } from "react-router-dom";
import { Notauth } from "../../../Pages/cartPage/Cart.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Heading2 } from "../../HomePage/Heading/Headings.style";
import { MoonLoader } from "react-spinners";

function Productlist({ type }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [categories, setCategories] = useState({});
  let [page, setpage] = useState(false);
  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAllProducts(type));
      setCategories(await fetchAllCategory());
    }
    fetchData();
  }, [page]);

  let productData = useSelector((state) => state.product) || {};

  const handleClick = (item) => {
    navigate(`/subcategories/${item}`);
    setpage(!page);
  };

  console.log(productData);

  return (
    <>
      {productData &&
      productData.product.category &&
      productData.product.category[0].subcategories.length ? (
        <>
          <Heading2>SubCategories</Heading2>
          <Categoriescss>
            {productData &&
            productData.product &&
            productData.product.category &&
            productData.product.category[0].subcategories.length
              ? productData.product.category[0].subcategories.map(
                  (item, idx) => {
                    item.Image =
                      item.Image === "Graphic Printed.jpg"
                        ? "GraphicPrinted.jpg"
                        : item.Image === "Oversized.jpg"
                        ? "OverSized.jpg"
                        : item.Image;

                    return (
                      <CategoryBoxcss
                        key={idx}
                        image={`/img/Category/${type}/${item.Image}`}
                        onClick={() => {
                          handleClick(item.SubCategory.trim());
                        }}
                      >
                        <div className="img" key={uuid()}>
                          <div className="layer" key={uuid()}></div>
                          <h3 key={uuid()}>{item.SubCategory}</h3>
                        </div>
                      </CategoryBoxcss>
                    );
                  }
                )
              : <MoonLoader
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
                        size={100}
                      />}
          </Categoriescss>
        </>
      ) : (
        ""
      )}

      <Notauth>
        {productData &&
        productData.product.products &&
        productData.product.products.length
          ? `${productData.product.products.length} `
          : "Loading "}
        Products
      </Notauth>
      <Productlistcss>
        {productData && productData.product.products ? (
          productData.product.products.map((item, idx) => (
            <ProductBox val={item} key={idx} />
          ))
        ) : (
          <h1>
            {productData.loading
              ? <MoonLoader
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
                        size={100}
                      />: ""}
          </h1>
        )}
      </Productlistcss>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     productData: state.product,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchAllProducts: (type) => dispatch(fetchAllProducts(type)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Productlist);

export default Productlist;
