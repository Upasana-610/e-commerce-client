import userReducer from "./user/userReducer";
import errorReducer from "./usererror/errorReducer";
import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  autherr: errorReducer,
});

export default rootReducer;
