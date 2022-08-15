import "./App.css";

import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./Pages/Collections/Collections";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./Pages/Login/Login";
import { loadUser } from "./redux";
import { useEffect } from "react";
import SignUp from "./Pages/SignUp/SignUp";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/cartPage/Cart";
import Subcategories from "./Pages/Subcategories/Subcategories";
import GlobalStyles from "./globalStyle";
import Account from "./Pages/Account/Account";
import ScrollToTop from "./core/ScrollToTop";
import ForgotPass from "./Pages/forgotPasswords/ForgotPass";
import ResetPass from "./Pages/ResetPassword/ResetPass";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="/collections/:item"
                element={<Collections />}
              />
              <Route
                exact
                path="/subcategories/:item"
                element={<Subcategories />}
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/forgotpassword" element={<ForgotPass />} />
              <Route
                exact
                path="/resetpassword/:token"
                element={<ResetPass />}
              />

              <Route
                exact
                path="/productpage/:product"
                element={<ProductPage />}
              />
              <Route exact path="/cart" element={<Cart />} />

              <Route exact path="/me" element={<Account />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
