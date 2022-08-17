import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";

import Dropdown from "react-bootstrap/Dropdown";
import { OrderCss } from "./MyOrder.style";

import { createGlobalStyle } from "styled-components";
import OrderDropDown from "../../components/Myorder/OrderDropDown";

const MyOrder = () => {
  let { myOrder } = useSelector((state) => (state.user ? state.user : []));

  return (
    <Layout>
      <OrderCss>
        {myOrder && myOrder.length !== 0
          ? myOrder.map((item, idx) => (
              <>
                <OrderDropDown item={item} />
              </>
            ))
          : "No Past Orders"}
      </OrderCss>
    </Layout>
  );
};

export default MyOrder;

{
  /* <img
                src={`/img/Products/Product1/${item.product[0].productId.pImages[0]}`}
                className="activeImg"
                alt="MainImg"
              ></img>
              <p>
                {item.product[0].productId.pName} <h5>View</h5>
              </p>
              <p>{item.product[0].size}</p>
              <p>
                Rs. {item.product[0].productId.pPrice} x {item.product[0].qty}
              </p> */
}

{
  /* <Itemcss key={idx}>
             
              <p>15 products Ordered</p>
              <p>Purchased on {item.createdAt.split("T")[0]}</p>
              <p>Total Price Rs. {item.total_price}</p>
            </Itemcss> */
}
