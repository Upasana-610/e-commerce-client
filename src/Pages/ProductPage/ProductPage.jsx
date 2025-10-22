import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showAlert } from "../../api/alerts";
import { fetchSingleProduct } from "../../api/ProductsApi";
import Layout from "../../Layout/Layout";

import { Productcover, Productcss, ProductDetails } from "./ProductPage.style";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCart } from "../../redux/user/usercartActions";
import ProductPageComp from "../../components/ProductPageComp";
import { MoonLoader } from "react-spinners";

const ProductPage = () => {
  let params = useParams();
  let [product, setProduct] = useState({});
  let [curr, setCurr] = useState("");
  let [toggelcart, setToggleCart] = useState(false);

  let [qty, setQty] = useState(1);
  let [selected, setSelected] = useState(-1);
  let dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let user = useSelector((state) => state.user.user);
  let usercart =
    useSelector((state) =>
      state.user.user ? state.user.user.cart : undefined
    ) || undefined;

  const singleProduct = async () => {
    let result = await fetchSingleProduct(params.product);
    if (result) {
      setProduct(result.data.data);
      setCurr(product.length && product.pImages ? product.pImages[0] : "");
    }
  };

  // useEffect
  useEffect(() => {
    singleProduct(params.product);
  }, []);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  // Qty
  const changeQty = (sign) => {
    let currqty = qty;
    if (sign === "+") currqty++;
    else {
      if (currqty > 0) currqty--;
    }
    setQty(currqty);
  };

  // size
  const selectedSize = (e, sel) => {
    if (e.target.textContent !== sel) {
      console.log("a");
      setSelected(e.target.textContent.trim());
      console.log("func", selected);
    } else setSelected(-1);
  };

  // cart Add
  const cartAdd = () => {
    if (isAuthenticated !== true)
      showAlert("error", "Please sign up or sign in to add to cart");
    else if (qty === 0 || selected === -1)
      showAlert("error", "Please select size and give quantity !");
    else {
      let unique = -1;

      usercart.forEach((item, idx) => {
        if (item.product.id === product.id && item.selected === selected) {
          showAlert("error", "Already in cart !");

          unique = idx;
        }
      });

      if (unique === -1) {
        showAlert(
          "success",
          "Wait for the item to get added in  cart successfully!",
          1000
        );
        console.log(selected);
        usercart.push({ product, selected, qty });

        // setTimeout(() => {
        // cartAdding(user._id, cart[cart.length - 1]);
        console.log(usercart);
        dispatch(addCart(user._id, usercart[usercart.length - 1]));

        setToggleCart(!toggelcart);
      }
    }
  };

  return product.length !== 0 && product.pImages ? (
    <Layout>
      {product.length !== 0 && product.pImages
        ? curr === ""
          ? setCurr(product.pImages[0])
          : ""
        : ""}

      <Productcover pColor={product.pColor}>
        <Productcss>
          <div>
            {product.length !== 0 && product.pImages
              ? product.pImages.map((item, idx) => (
                  <img
                    key={idx}
                    alt="product"
                    src={`/img/Products/Product1/${item}`}
                    className={curr === item ? "active" : ""}
                    onClick={(e) => {
                      setCurr(item);
                    }}
                  ></img>
                ))
              : ""}
          </div>
          <div>
            {curr !== "" ? (
              <img
                src={`/img/Products/Product1/${curr}`}
                className="activeImg"
                alt="MainImg"
              ></img>
            ) : (
              <MoonLoader
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
              />
            )}
            <button onClick={cartAdd}>Add to Cart</button>
          </div>

          <ProductDetails pColor={product.pColor}>
            <ProductPageComp
              product={product}
              cartAdd={cartAdd}
              selected={selected}
              selectedSize={selectedSize}
              changeQty={changeQty}
              qty={qty}
            />
          </ProductDetails>
        </Productcss>
        <div className="desc">
          <ProductPageComp
            product={product}
            cartAdd={cartAdd}
            selectedSize={selectedSize}
            changeQty={changeQty}
            selected={selected}
            qty={qty}
          />
        </div>
      </Productcover>
    </Layout>
  ) : (
    <Layout>
      {
        <MoonLoader
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
        />
      }{" "}
    </Layout>
  );
};

export default ProductPage;
