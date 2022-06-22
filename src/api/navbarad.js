import axios from "axios";

const BASE_URL =
  "https://roar-ecommerce-api.herokuapp.com/" || "http://localhost:3000";

export const fetchnavbarAddata = async () => {
  try {
    let result = await axios.get(`${BASE_URL}/api/v1/navad`);

    return result.data.data.data;
  } catch (err) {
    console.log(err);
  }
};
