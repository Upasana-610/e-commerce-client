import React from "react";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Itemcss } from "../../Pages/cartPage/Cart.style";
import { OrderDropCss } from "./Order.style";

const OrderDropDown = ({ item }) => {
  let [toggle, setToggle] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <OrderDropCss style={{ cursor: "pointer" }}>
        <i
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? <BsChevronDoubleDown /> : <BsChevronDoubleRight />}
        </i>
        <p>{item.product.length} products Ordered</p>
        <p>Purchased on {item.createdAt.split("T")[0]}</p>
        <p>Total Price Rs. {item.total_price}</p>
      </OrderDropCss>
      {toggle
        ? item.product.map((it, ix) => (
            <Itemcss>
              <img
                src={`/img/Products/Product1/${it.productId.pImages[0]}`}
                className="activeImg"
                alt="MainImg"
              ></img>
              <p>
                {it.productId.pName}{" "}
                <h5
                  onClick={() => {
                    navigate(`/productpage/${it.productId._id}`);
                  }}
                >
                  View
                </h5>
              </p>
              <p>{it.size}</p>
              <p>
                Rs. {it.productId.pPrice} x {it.qty}
              </p>
            </Itemcss>
          ))
        : ""}
    </>
  );
};

export default OrderDropDown;
