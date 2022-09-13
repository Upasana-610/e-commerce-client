import axios from "axios";

import { BASE_URL } from "./password";

//new Arrival or TopSellers
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

export const DeleteSingleProduct = async (product) => {
  try {
    let result = await axios.delete(
      `${BASE_URL}/api/v1/product/single/${product}`
    );

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllProducts = async () => {
  try {
    console.log("object");
    let result = await axios.get(`${BASE_URL}/api/v1/product`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
