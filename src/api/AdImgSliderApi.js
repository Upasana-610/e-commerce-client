import axios from "axios";

const BASE_URL =
  "https://roar-ecommerce-api.herokuapp.com/" || "http://localhost:3000";

export const fetchAdImgdata = async () => {
  let result = await axios.get(`${BASE_URL}/api/v1/adimg`);

  return result.data.data.data;
};
