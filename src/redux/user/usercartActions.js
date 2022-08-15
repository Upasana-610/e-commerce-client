import axios from "axios";
import { cartAdding, cartDelApi, cartQuantityApi } from "../../api/cartapi";
import { loadUser } from "./userActions";
import { USER_CART } from "./userTypes";

export const incCart = (userid, productid, qty, sel) => (dispatch) => {
  cartQuantityApi(userid, productid, qty, sel);
  dispatch(loadUser());
};

export const addCart = (userid, cart) => (dispatch) => {
  cartAdding(userid, cart);
  dispatch({ type: USER_CART });
};

export const delCart =
  (userid, productid, selected) => (dispatch, getState) => {
    setTimeout(() => {
      cartQuantityApi(userid, productid, 0, selected);
    }, 100);

    setTimeout(() => {
      cartDelApi(userid, productid, selected);
    }, 300);
    // cartDelApi(userid, productid, selected);

    setTimeout(() => {
      //   dispatch({ type: USER_CART });
      dispatch(loadUser());
    }, 500);

    // alert("2");
  };
