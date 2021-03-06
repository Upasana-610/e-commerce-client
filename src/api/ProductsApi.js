import axios from "axios";

import { BASE_URL } from "./password";

export const fetchProduct = async (product) => {
  try {
    let result = await axios.get(`${BASE_URL}/api/v1/product/${product}`);
    console.log("sdfsfs");
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleProduct = async (product) => {
  try {
    let result = await axios.get(
      `${BASE_URL}/api/v1/product/single/${product}`
    );

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
