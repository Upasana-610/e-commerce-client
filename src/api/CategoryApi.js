import axios from "axios";

import { BASE_URL } from "./password";

export const fetchAllCategory = async () => {
  try {
    let result = await axios.get(`${BASE_URL}/api/v1/category/`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

//returns products
export const fetchProductCategory = async (category) => {
  try {
    let result = await axios.get(`${BASE_URL}/api/v1/category/${category}`);
    console.log(result);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
