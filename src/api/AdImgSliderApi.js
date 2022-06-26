import axios from "axios";
import { BASE_URL } from "./password";

export const fetchAdImgdata = async () => {
  let result = await axios.get(`${BASE_URL}/api/v1/adimg`);

  return result.data.data.data;
};
