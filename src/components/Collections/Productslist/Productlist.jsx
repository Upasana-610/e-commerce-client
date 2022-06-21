import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchAllCategory,
  fetchProductCategory,
} from "../../../api/CategoryApi";
import { connect } from "react-redux";
import ProductBox from "../../../core/ProductBox/ProductBox";
import { fetchAllProducts } from "../../../redux";
import { Productlistcss } from "./Productslist.style";
import {
  Categoriescss,
  Heading,
} from "../../HomePage/Categories/Categories.style";
import uuid from "react-uuid";
import { CategoryBoxcss } from "../../../core/CategoryBox/CategoryBox.style";
import { useHistory } from "react-router-dom";
import { Notauth } from "../../../Pages/cartPage/Cart.style";

function Productlist({ type, productData = {}, fetchAllProducts }) {
  let history = useHistory();

  let [categories, setCategories] = useState({});
  let [page, setpage] = useState(false);
  useEffect(() => {
    async function fetchData() {
      fetchAllProducts(type);
      setCategories(await fetchAllCategory());
    }
    fetchData();
  }, [page]);

  const handleClick = (item) => {
    history.push(`/subcategories/${item}`);
    setpage(!page);
  };

  // const observer = useRef();
  // const lastBookElementRef = useCallback(
  //   (node) => {
  //     if (productData.loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && productData.hasMore) {
  //         setpageNumber((prev) => prev + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [productData.loading, productData.hasMore]
  // );

  console.log(productData);

  return (
    <>
      {productData &&
      productData.product.category &&
      productData.product.category[0].subcategories.length ? (
        <>
          <Heading>SubCategories</Heading>
          <Categoriescss>
            {productData &&
            productData.product.category &&
            productData.product.category[0].subcategories.length ? (
              productData.product.category[0].subcategories.map((item, idx) => {
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
              })
            ) : (
              <h1>Loading...</h1>
            )}
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
          <h1>{productData.loading ? "Loading..." : ""}</h1>
        )}
      </Productlistcss>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (type) => dispatch(fetchAllProducts(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);
