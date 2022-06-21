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
    dispatch(fetchProductRequest());
    // axios
    //   .get("https://jsonplaceholder.typicode.com/PRODUCT")
    //   .then((response) => {
    //     // response.data is the PRODUCT
    //     const PRODUCT = response.data;
    //     dispatch(fetchProductSuccess(PRODUCT));
    //   })
    //   .catch((error) => {
    //     // error.message is the error message
    //     dispatch(fetchProductFailure(error.message));
    //   });

    try {
      let productData;

      if (type === "newarrivals" || type === "topsellers") {
        productData = await fetchProduct(type.trim());
      } else {
        productData = await fetchProductCategory(type.trim());
      }
      // finalData = pagination(productData.data);
      console.log(productData);
      dispatch(fetchProductSuccess(productData));
    } catch (error) {
      dispatch(fetchProductFailure(error.message));
    }
  };
};

export const singleProduct = (product) => {
  let result;
  let single = async () => {
    try {
      result = await fetchSingleProduct(product);
    } catch (err) {
      console.log(err);
    }
  };
  single();
  console.log(result);
  return result;
  // console.log(await single());
};

// export const fillVisible = (item) => {
//   return (dispatch) => {
//     try {
//       console.log(item);

//       dispatch(fillVisibleSuccess(item));
//     } catch (error) {
//       dispatch(fetchProductFailure(error.message));
//     }
//   };
// };
// function pagination(data) {
//   let obj = {
//     page: 0,
//     post: [],
//   };
//   let pg = 0;
//   let productData = [];
//   data.forEach((item, idx) => {
//     // console.log(Math.trunc(idx / 5));
//     if (Math.trunc(idx / 8) === pg) {
//       obj.page = pg;
//       obj.post.push(item);
//     } else {
//       productData.push({ ...obj });
//       pg = Math.trunc(idx / 8);
//       obj.page = pg;
//       obj.post = [];
//       obj.post.push(item);
//     }
//   });
//   return productData;
// }

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};
