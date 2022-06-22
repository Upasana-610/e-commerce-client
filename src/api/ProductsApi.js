import axios from "axios";

const BASE_URL =
  "https://roar-ecommerce-api.herokuapp.com/" || "http://localhost:3000";

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
