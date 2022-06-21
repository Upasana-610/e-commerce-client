import "./App.css";
import Navbar from "./core/Navbar/Navbar";
import Footer from "./core/Footer/Footer";
import ProductBox from "./core/ProductBox/ProductBox";

import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Collections from "./Pages/Collections/Collections";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./Pages/Login/Login";
import { loadUser } from "./redux";
import { useEffect } from "react";
import SignUp from "./Pages/SignUp/SignUp";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/cartPage/Cart";
import { useHistory } from "react-router-dom";
import { BiWindowOpen } from "react-icons/bi";
import { useState } from "react";
import Subcategories from "./Pages/Subcategories/Subcategories";
import GlobalStyles from "./globalStyle";

function App() {
  let history = useHistory();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [locationKeys, setLocationKeys] = useState([]);

  return (
    <>
      {/* <HomePage /> */}
      {/* <ProductBox /> */}
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/collections/:item" component={Collections} />
            <Route
              exact
              path="/subcategories/:item"
              component={Subcategories}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/productpage/:product" component={ProductPage} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
