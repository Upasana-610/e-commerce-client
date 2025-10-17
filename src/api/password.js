import axios from "axios";
import { showAlert } from "./alerts";
import { CLIENT_URL } from "./stripe";

export const BASE_URL = "https://roarupa-api.vercel.app";
// export const BASE_URL = "http://localhost:3000";

export const updatePassword = async ({
  passwordCurrent,
  password,
  passwordConfirm,
}) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${BASE_URL}/api/v1/users/updatePassword`,

      data: {
        passwordCurrent,
        password,
        passwordConfirm,
        jwt: localStorage.getItem("jwt"),
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Password Changed successfully!", 2);
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
      return true;
    }
  } catch (err) {
    console.log(err.response);
    // showAlert("error", err.response.message, 2);
  }
};

export const forgetPassword = async ({ email }) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${BASE_URL}/api/v1/users/forgotPassword`,

      data: {
        email,
        resetURL: `${CLIENT_URL}/resetPassword`,
      },
    });

    if (res.data.status === "success") {
      showAlert(
        "success",
        "A Reset Token has been mailed to the given gmail id successfully!",
        2
      );
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
    }
  } catch (err) {
    console.log(err.response);
    showAlert("error", err.response.data.message, 2);
  }
};

export const ResetPassword = async ({ token, password, passwordConfirm }) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${BASE_URL}/api/v1/users/resetPassword/${token}`,
      data: {
        password,
        passwordConfirm,
      },
    });
    console.log("a");

    if (res.data.status === "success") {
      showAlert("success", "Password reset done successfully!", 2);
      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 1500);
    }
  } catch (err) {
    console.log(err.response);
    showAlert("error", err.response.data.message, 2);
  }
};
