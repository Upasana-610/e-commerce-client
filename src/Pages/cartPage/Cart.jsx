import { connect } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Auth, Itemcss, Itemmedia, Notauth } from "./Cart.style";
import { cartDelApi, cartQuantityApi } from "../../api/cartapi";
import { loadUser } from "../../redux";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { showAlert } from "../../api/alerts";

const Cart = ({ isAuthenticated, user, usercart, userLoad }) => {
  let [cart, setCart] = useState([]);
  let history = useHistory();
  // setCart(usercart || JSON.parse(localStorage.getItem("cart")) || ["a"]);
  console.log(user, isAuthenticated);
  console.log(cart);
  useEffect(() => {
    if (isAuthenticated === true) {
      setCart(usercart);
    }
  }, [isAuthenticated]);

  const cartQuantityInc = (item) => {
    console.log(item);

    item.qty += 1;
    cartQuantityApi(user._id, item.product.id, item.qty, item.selected);
    userLoad();
  };

  const cartQuantityDnc = (item) => {
    console.log(item);
    if (item.qty - 1 > 0) {
      item.qty -= 1;
      cartQuantityApi(user._id, item.product.id, item.qty, item.selected);

      userLoad();
    }
  };

  const cartQuantityDel = (item) => {
    console.log(item);
    usercart = usercart.filter((itempr) => itempr === item);
    showAlert("success", "Wait till the item gets deleted !");
    setTimeout(() => {
      cartQuantityApi(user._id, item.product.id, 0, item.selected);
    }, 1000);

    setTimeout(() => {
      cartDelApi(user._id, item.product.id);
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 3000);

    userLoad();
  };

  const goToprod = (id) => {
    history.push(`/productpage/${id}`);
  };

  return (
    <Layout>
      {isAuthenticated !== true ? (
        <Notauth>Please login or sign up to add items into cart</Notauth>
      ) : (
        <Auth>
          {usercart.length === 0 ? (
            <Notauth>Cart is empty !</Notauth>
          ) : (
            usercart.map((item, idx) => {
              return (
                <>
                  <Itemcss key={idx}>
                    <img
                      src={`/img/Products/Product1/${item.product.pImages[0]}`}
                      className="activeImg"
                      alt="MainImg"
                    ></img>
                    <p>
                      {item.product.pName}{" "}
                      <h5
                        onClick={() => {
                          goToprod(item.product.id);
                        }}
                      >
                        View
                      </h5>
                    </p>
                    <p>{item.selected}</p>
                    <p>
                      Rs. {item.product.pPrice} x {item.qty}
                    </p>
                    <p>
                      <div
                        className="qty"
                        onClick={() => {
                          cartQuantityInc(item);
                        }}
                      >
                        +
                      </div>
                      <div
                        className="qty"
                        onClick={() => {
                          cartQuantityDnc(item);
                        }}
                      >
                        -
                      </div>
                    </p>
                    <p>{item.product.pOffer} % discount</p>
                    <p>
                      <p>
                        <AiFillDelete
                          onClick={() => {
                            cartQuantityDel(item);
                          }}
                        />
                      </p>
                    </p>
                  </Itemcss>
                  <Itemmedia key={idx}>
                    <div>
                      <img
                        src={`/img/Products/Product1/${item.product.pImages[0]}`}
                        className="activeImg"
                        alt="MainImg"
                      ></img>
                      <p>
                        {item.product.pName}{" "}
                        <h5
                          onClick={() => {
                            goToprod(item.product.id);
                          }}
                        >
                          View
                        </h5>
                      </p>
                    </div>

                    <div>
                      <p>{item.selected}</p>
                      <p>
                        Rs. {item.product.pPrice} x {item.qty}
                      </p>
                      <p>
                        <div
                          className="qty"
                          onClick={() => {
                            cartQuantityInc(item);
                          }}
                        >
                          +
                        </div>
                        <div
                          className="qty"
                          onClick={() => {
                            cartQuantityDnc(item);
                          }}
                        >
                          -
                        </div>
                      </p>
                    </div>

                    <p className="offer">{item.product.pOffer} %off</p>
                    <p className="delete">
                      <p>
                        <AiFillDelete
                          onClick={() => {
                            cartQuantityDel(item);
                          }}
                        />
                      </p>
                    </p>
                  </Itemmedia>
                </>
              );
            })
          )}

          {usercart.length !== 0 ? <button>Proceed to Pay</button> : ""}
        </Auth>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
