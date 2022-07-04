import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./../../image/logo.png";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { NavbarCss, Logo, Icon, Ad } from "./Navbar.style";
import { fetchnavbarAddata } from "../../api/navbarad";
import { useHistory } from "react-router-dom";
import Slider from "../Slider/Slider";
import { connect } from "react-redux";
import { logout } from "../../redux";

const Navbar = ({ isAuthenticated, user, logout, usercart }) => {
  let [ad, setAd] = useState([]);
  let [search, setSearch] = useState(false);

  let history = useHistory();
  const logoutUser = () => {
    logout();

    history.push(`/`);
  };

  const handleClick = () => {
    history.push(`/login`);
  };

  const handleClickSignUp = () => {
    history.push(`/signup`);
  };

  const cartPage = () => {
    history.push(`/cart`);
  };

  const fetchnavData = async () => {
    try {
      let data = await fetchnavbarAddata();
      setAd(data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToAcc = () => {
    history.push("/me");
  };

  const gotoHome = () => {
    history.push("/");
  };

  useEffect(() => {
    fetchnavData();
  }, []);

  // }, 2000);
  const iconStyle = {
    cursor: "pointer",
    fontSize: "2.5vw",
    marginLeft: "3.05vw",
  };

  return (
    <>
      <NavbarCss>
        <GiHamburgerMenu className="iconcls" />
        <Logo onClick={gotoHome}>
          <img src={logo} />
          <p>Roar</p>
        </Logo>

        <Icon
          photo={isAuthenticated === true ? `/img/users/${user.photo}` : ""}
        >
          {isAuthenticated !== true ? (
            <>
              <h6 className="iconcls" onClick={handleClickSignUp}>
                {" "}
                Sign Up
              </h6>
              <FaUserAlt className="iconcls" onClick={handleClick} />
            </>
          ) : (
            <>
              {" "}
              <h6 className="iconcls" onClick={logoutUser}>
                Logout
              </h6>
              <div onClick={goToAcc} className="iconcls"></div>
            </>
          )}
          <>
            {/* <FiSearch
              className="iconcls"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSearch(!search);
              }}
            /> */}
            <FaShoppingCart
              onClick={cartPage}
              className="iconcls"
              style={{ cursor: "pointer" }}
            />
            {isAuthenticated === true ? <p>{usercart.length}</p> : ""}
          </>
        </Icon>
        {/* <input
          type="text"
          placeholder="search here"
          className={search ? `hidden` : ""}
        /> */}
      </NavbarCss>

      <Slider data={ad} height={"3vw"} color="rgb(34, 26, 26)" />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
    usercart: state.user.user ? state.user.user.cart : undefined,
    error: state.error,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchtoprops)(Navbar);
