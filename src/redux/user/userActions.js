import axios from "axios";
import { returnErrors, clearErrors } from "./../usererror/errorActions";

import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./userTypes";

import { GET_ERRORS, CLEAR_ERRORS } from "./../usererror/errorTypes";
import { login } from "../../api/login";
import { showAlert } from "../../api/alerts";

const BASE_URL = "http://localhost:3000";

// check token and load user
export const loadUser = () => async (dispatch, getState) => {
  //   User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get(`${BASE_URL}/api/v1/users/me`, tokenConfig(getState))
    .then((res) => {
      const userData = {
        user: res.data.data.data,
        token: localStorage.getItem("jwt"),
      };
      dispatch({
        type: USER_LOADED,
        payload: userData,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(
        returnErrors(err.response.data.message, err.response.statusCode)
      );
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// Login User
export const loginUser = ({ email, password }) => {
  return async (dispatch, getState) => {
    try {
      const user = await login({ email, password });
      console.log("happen");

      const userData = {
        user: user,
        token: localStorage.getItem("jwt"),
      };

      dispatch({
        type: USER_LOADED,
        payload: userData,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch(returnErrors("Unable to Login", 401, "LOGIN_FAIL"));
    }
  };
};

// Register User
export const register = ({ email, password, passwordConfirm, name }) => (
  dispatch,
  getState
) => {
  const config = {
    headers: {
      "Content-Type": "application.json",
    },
  };
  const h = JSON.stringify({ name, email, password, passwordConfirm });

  axios
    .post(`${BASE_URL}/api/v1/users/signup`, h, tokenConfig(getState))
    .then((res) => {
      const userData = {
        user: res.data.data.user,
        token: res.data.token,
      };
      localStorage.setItem("jwt", res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: userData,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
      showAlert("success", "Signed up successfully!");
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "REGISTER_FAIL"
        )
      );
      showAlert("error", err.response.data.message);
    });
};

// logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

// Set up config.headers and token
export const tokenConfig = (getState) => {
  // Get token from localStorage=
  const token = getState().user.token;

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
