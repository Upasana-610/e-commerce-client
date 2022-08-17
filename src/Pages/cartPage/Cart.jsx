import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Auth, Itemcss, Itemmedia, Notauth } from "./Cart.style";
import { cartDelApi, cartEmpty, cartQuantityApi } from "../../api/cartapi";
import { loadUser } from "../../redux";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../api/alerts";
import {
  delCart,
  incCart,
  updateUsercart,
} from "../../redux/user/usercartActions";
import { bookTour } from "../../api/stripe";
import Paybutton from "../../components/Paybutton";

const Cart = () => {
  let [cart, setCart] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let user = useSelector((state) => state.user.user);

  let usercart = useSelector((state) =>
    state.user.user ? state.user.user.cart : undefined
  );

  useEffect(() => {
    if (isAuthenticated === true) {
      setCart(usercart);
    }
  }, [isAuthenticated]);

  const cartQuantityInc = (item) => {
    console.log(item);

    item.qty += 1;
    // cartQuantityApi(user._id, item.product.id, item.qty, item.selected);
    dispatch(incCart(user._id, item.product.id, item.qty, item.selected));
    setCart(!cart);
  };

  const cartQuantityDnc = (item) => {
    console.log(item);
    if (item.qty - 1 > 0) {
      item.qty -= 1;
      // cartQuantityApi(user._id, item.product.id, item.qty, item.selected);
      dispatch(incCart(user._id, item.product.id, item.qty, item.selected));

      setCart(!cart);
    }
  };

  const cartQuantityDel = (item) => {
    console.log(item);
    usercart = usercart.filter((itempr) => itempr === item);
    showAlert("success", "Wait till the item gets deleted !");
    dispatch(delCart(user._id, item.product.id, item.selected));
    setCart(!cart);
  };

  const goToprod = (id) => {
    navigate(`/productpage/${id}`);
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
          {usercart.length !== 0 ? (
            <button
              onClick={() => {
                cartEmpty(user._id);
                dispatch(loadUser());
              }}
            >
              Delete All Items
            </button>
          ) : (
            ""
          )}

          {usercart.length !== 0 ? <Paybutton /> : ""}
        </Auth>
      )}
    </Layout>
  );
};

export default Cart;
