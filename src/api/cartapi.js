import axios from "axios";
import { showAlert } from "./alerts";

const BASE_URL =
  "https://roar-ecommerce-api.herokuapp.com/" || "http://localhost:3000";

export const cartAdding = async (userid, cart) => {
  try {
    const res = await axios({
      method: "PUT",
      url: `${BASE_URL}/api/v1/users/cartadd`,

      data: {
        userid,
        cart,
      },
    });
    console.log("dndns");

    if (res.data.status === "success") {
      showAlert("success", "Added in  cart successfully!");
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
    }
  } catch (err) {
    showAlert("error", "Could'nt Add Error");
  }
};

export const cartQuantityApi = async (userid, productid, qty, sel) => {
  console.log(userid, productid, qty);
  try {
    const res = await axios({
      method: "PUT",
      url: `${BASE_URL}/api/v1/users/cartqty`,

      data: {
        userid,
        productid,
        qty,
        sel,
      },
    });
    console.log("dndns");
  } catch (err) {}
};

export const cartDelApi = async (userid, productid) => {
  console.log(userid, productid);
  try {
    const res = await axios({
      method: "PUT",
      url: `${BASE_URL}/api/v1/users/cartdel`,

      data: {
        userid,
        productid,
      },
    });
    console.log("dndns");
  } catch (err) {}
};
