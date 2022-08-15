import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showAlert } from "../../api/alerts";
import { fetchSingleProduct } from "../../api/ProductsApi";
import Layout from "../../Layout/Layout";

import {
  Productcover,
  Productcss,
  ProductDetails,
  Qty,
  Size,
} from "./ProductPage.style";
import { cartAdding } from "../../api/cartapi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCart } from "../../redux/user/usercartActions";

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

  let [cart, setCart] = useState(usercart);

  const singleProduct = async () => {
    let result = await fetchSingleProduct(params.product);

    setProduct(result.data.data);
    setCurr(product.pImages[0]);
  };

  // useEffect
  useEffect(() => {
    singleProduct(params.product);
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      setCart(usercart);
    }
  }, [isAuthenticated]);

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
  const selectedSize = (e) => {
    if (e.target.textContent !== selected) {
      console.log("a");
      setSelected(e.target.textContent.trim());
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
      console.log(cart);

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
        usercart.push({ product, selected, qty });
        setCart(usercart);
        // setTimeout(() => {
        // cartAdding(user._id, cart[cart.length - 1]);
        dispatch(addCart(user._id, cart[cart.length - 1]));

        setToggleCart(!toggelcart);
      }
    }
  };

  console.log(product);

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
              new Array(21)
                .fill(100)
                .map((item, idx) => (
                  <Skeleton width={800} height={50} key={idx} />
                ))
            )}
          </div>

          <ProductDetails pColor={product.pColor}>
            <p className="Big">{product.pName}</p>
            <p className="Big">Rs. {product.pPrice}</p>
            <h7>{product.pOffer ? `Discount ${product.pOffer} % ` : ""}</h7>
            <p className="color">
              Color- <span>{product.pColor}</span>{" "}
            </p>
            <div className="colorCircle" bgcolor="#000000"></div>
            <Size>
              <h2>Size</h2>
              <ul>
                {product.length !== 0 && product.pSize
                  ? product.pSize.map((item, idx) => (
                      <li
                        onClick={(e) => {
                          selectedSize(e);
                          // console.log(selected);
                        }}
                        className={item === selected ? "selected" : ""}
                        key={idx}
                      >
                        {item}
                      </li>
                    ))
                  : ""}
              </ul>
            </Size>
            <Qty>
              <h3>Quantity</h3>
              <div>
                <p
                  className="qtyp bt"
                  onClick={() => {
                    changeQty("-");
                  }}
                >
                  -
                </p>
                <p className="qtyp">{qty}</p>
                <p
                  className="qtyp bt"
                  onClick={() => {
                    changeQty("+");
                  }}
                >
                  +
                </p>
              </div>
            </Qty>
            <dl>
              <h3>Description</h3>
              <dd>{product.pDescription}</dd>
              <h3>Occassion</h3>
              <dd>{product.pOccasion}</dd>
              <h3>Fabric</h3>
              <dd>{product.pFabric}</dd>
              <h3>Fit</h3>
              <dd>{product.pFit}</dd>
              <h3>Model Size</h3>
              <dd>{product.pModelSize}</dd>
              <h3>Model Height</h3>
              <dd>{product.pModelHeight}</dd>
              <h3>Wash</h3>
              <dd>{product.pWash}</dd>
            </dl>
            <button onClick={cartAdd}>Add to Cart</button>
          </ProductDetails>
        </Productcss>
        <div className="desc">
          <p className="Big">{product.pName}</p>
          <p className="Big">Rs. {product.pPrice}</p>
          <p>{product.pOffer ? `Discount ${product.pOffer} % ` : ""}</p>
          <p className="color">
            Color- <span>{product.pColor}</span>{" "}
          </p>
          <div className="colorCircle" bgcolor="#000000"></div>
          <Size>
            <h3>Size</h3>
            <ul>
              {product.length !== 0 && product.pSize
                ? product.pSize.map((item, idx) => (
                    <li
                      onClick={(e) => {
                        selectedSize(e);
                      }}
                      className={item === selected ? "selected" : ""}
                      key={idx}
                    >
                      {item}
                    </li>
                  ))
                : ""}
            </ul>
          </Size>
          <Qty>
            <h3>Quantity</h3>
            <div>
              <p
                className="qtyp bt"
                onClick={() => {
                  changeQty("-");
                }}
              >
                -
              </p>
              <p className="qtyp">{qty}</p>
              <p
                className="qtyp bt"
                onClick={() => {
                  changeQty("+");
                }}
              >
                +
              </p>
            </div>
          </Qty>
          <p>
            <h5>Description</h5>
            <p>{product.pDescription}</p>
            <h5>Occassion</h5>
            <p>{product.pOccasion}</p>
            <h5>Fabric</h5>
            <p>{product.pFabric}</p>
            <h5>Fit</h5>
            <p>{product.pFit}</p>
            <h5>Model Size</h5>
            <p>{product.pModelSize}</p>
            <h5>Model Height</h5>
            <p>{product.pModelHeight}</p>
            <h5>Wash</h5>
            <p>{product.pWash}</p>
          </p>
          <button onClick={cartAdd}>Add to Cart</button>
        </div>
      </Productcover>
    </Layout>
  ) : (
    <Layout>
      {new Array(21).fill(100).map((item, idx) => (
        <Skeleton width={10000} height={200} key={idx} />
      ))}{" "}
    </Layout>
  );
};

export default ProductPage;
