/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

const BASE_URL = "http://localhost:3000";

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
      showAlert("success", "Logged in successfully!");
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
      localStorage.setItem("jwt", res.data.token);
      return res.data.data.user;
    }
  } catch (err) {
    window.setTimeout(() => {
      location.assign("/login");
    });
    showAlert("error", "Login Error");
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
