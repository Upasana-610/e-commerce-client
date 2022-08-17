import axios from "axios";
import { Action } from "history";
import { cartAdding, cartDelApi, cartQuantityApi } from "../../api/cartapi";
import { loadUser } from "./userActions";
import { USER_CART } from "./userTypes";

export const incCart = (userid, productid, qty, sel) => (dispatch) => {
  cartQuantityApi(userid, productid, qty, sel);
  dispatch(loadUser());
};

export const addCart = (userid, cart) => async (dispatch) => {
  await cartAdding(userid, cart);
  console.log(cart);
  dispatch({ type: USER_CART, payload: cart });
  dispatch(loadUser());
};

export const delCart =
  (userid, productid, selected) => (dispatch, getState) => {
    setTimeout(() => {
      cartQuantityApi(userid, productid, 0, selected);
    }, 100);

    setTimeout(() => {
      cartDelApi(userid, productid, selected);
    }, 300);

    setTimeout(() => {
      dispatch(loadUser());
    }, 500);
  };
