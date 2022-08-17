// import axios from "axios";
import { fetchProductCategory } from "../../api/CategoryApi";
import { fetchProduct, fetchSingleProduct } from "../../api/ProductsApi";

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productTypes";

export const fetchAllProducts = (type) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_REQUEST,
    });

    try {
      let productData;

      if (type === "newarrivals" || type === "topsellers") {
        productData = await fetchProduct(type.trim());
      } else {
        productData = await fetchProductCategory(type.trim());
      }
      // finalData = pagination(productData.data);
      console.log(productData);
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: productData,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const singleProduct = (product) => async () => {
  try {
    let result = await fetchSingleProduct(product);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
