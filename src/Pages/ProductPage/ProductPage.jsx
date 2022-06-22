import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { showAlert } from "../../api/alerts";
import { fetchSingleProduct } from "../../api/ProductsApi";
import Layout from "../../Layout/Layout";
import { loadUser, singleProduct } from "../../redux";
import { Productcss, ProductDetails, Qty, Size } from "./ProductPage.style";
import { cartAdding } from "../../api/cartapi";

const ProductPage = ({ isAuthenticated, user, usercart, userLoad }) => {
  let params = useParams();
  let [product, setProduct] = useState({});
  let [curr, setCurr] = useState("");
  let [qty, setQty] = useState(1);
  let [selected, setSelected] = useState(-1);
  let [cart, setCart] = useState(usercart);
  let result;

  const singleProduct = async () => {
    let result = await fetchSingleProduct(params.product);

    setProduct(result.data.data);
    setCurr(product.pImages[0]);
  };

  const changeQty = (sign) => {
    let currqty = qty;
    if (sign === "+") currqty++;
    else {
      if (currqty > 0) currqty--;
    }
    setQty(currqty);
  };

  const selectedSize = (e) => {
    if (e.target.textContent !== selected) {
      console.log("a");
      setSelected(e.target.textContent.trim());
    } else setSelected(-1);
  };

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
        usercart.push({ product, selected, qty });
        setCart(usercart);

        cartAdding(user._id, cart[cart.length - 1]);
        setTimeout(() => {
          window.location.reload();
        }, 0.75 * 1000);

        userLoad();
      }
    }
  };

  console.log(product);

  useEffect(() => {
    singleProduct(params.product);
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      setCart(usercart);
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      {product.length !== 0 && product.pImages
        ? curr === ""
          ? setCurr(product.pImages[0])
          : ""
        : ""}

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
          <img
            src={`/img/Products/Product1/${curr}`}
            className="activeImg"
            alt="MainImg"
          ></img>
        </div>

        <ProductDetails pColor={product.pColor}>
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
          <dl>
            <dt>Description</dt>
            <dd>{product.pDescription}</dd>
            <dt>Occassion</dt>
            <dd>{product.pOccasion}</dd>
            <dt>Fabric</dt>
            <dd>{product.pFabric}</dd>
            <dt>Fit</dt>
            <dd>{product.pFit}</dd>
            <dt>Model Size</dt>
            <dd>{product.pModelSize}</dd>
            <dt>Model Height</dt>
            <dd>{product.pModelHeight}</dd>
            <dt>Wash</dt>
            <dd>{product.pWash}</dd>
          </dl>
          <button onClick={cartAdd}>Add to Cart</button>
        </ProductDetails>
      </Productcss>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    usercart: state.user.user ? state.user.user.cart : undefined,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoad: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
