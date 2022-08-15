import axios from "axios";
import { showAlert } from "./alerts";

import { BASE_URL } from "./password";

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
      showAlert("success", "Item  added in  cart successfully!");
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
    }
    return;
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
    return res;
    console.log("dndns");
  } catch (err) {}
};

export const cartDelApi = async (userid, productid, selected) => {
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
    if (res) showAlert("success", "Item deleted Successfully!");
  } catch (err) {}
};
