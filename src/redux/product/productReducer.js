import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FILL_VISIBLE,
} from "./productTypes";

const initialState = {
  loading: false,
  product: [],

  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case FILL_VISIBLE:
    //   return {
    //     ...state,
    //     visible: state.visible
    //       ? [...state.visible, action.payload]
    //       : [action.payload],
    //     product: state.product ? state.product : [],
    //   };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        // hasMore: action.payload.productData.data.length > 0 ? true : false,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
