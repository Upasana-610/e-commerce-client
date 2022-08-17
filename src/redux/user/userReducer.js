import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_CART,
  USER_ORDER,
} from "./userTypes";

const initialState = {
  token: localStorage.getItem("jwt"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  usercart: [],
  myOrder: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ORDER:
      return {
        ...state,
        myOrder: action.payload === undefined ? [] : action.payload,
      };
    case USER_CART:
      return {
        ...state,
        usercart: [...state.usercart, action.payload],
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,

        user: action.payload.user,
        usercart: action.payload.user.cart,
      };
    }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("jwt");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
