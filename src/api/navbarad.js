import axios from "axios";

import { BASE_URL } from "./password";

export const fetchnavbarAddata = async () => {
  try {
    let result = await axios.get(`${BASE_URL}/api/v1/navad`);

    return result.data.data.data;
  } catch (err) {
    console.log(err);
  }
};
