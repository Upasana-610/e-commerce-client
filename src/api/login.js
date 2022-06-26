/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

import { BASE_URL } from "./password";

export const login = async ({ email, password }) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${BASE_URL}/api/v1/users/login`,

      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!", 2);
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
      localStorage.setItem("jwt", res.data.token);
      return res.data.data.user;
    }
  } catch (err) {
    setTimeout(() => {
      window.location.assign("/login");
    });
    showAlert("error", "Login Error", 2);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    showAlert("success", "Logged Out Successfully");
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};
