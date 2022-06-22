import axios from "axios";

const BASE_URL =
  "https://roar-ecommerce-api.herokuapp.com/" || "http://localhost:3000";

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
