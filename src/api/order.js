import axios from "axios";
import { tokenConfig } from "../redux/user/userActions";

import { BASE_URL } from "./password";

export const fetchMyorder = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/v1/bookings/myorder`,
      OrderToken()
    );

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err.response);
  }
};

export const OrderToken = () => {
  // Get token from localStorage=
  const token = localStorage.getItem("jwt");

  //   Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // if token add to headers
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
};
