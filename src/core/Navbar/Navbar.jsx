import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";

import logo from "./../../image/logo.png";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { NavbarCss, Logo, Icon, Ad } from "./Navbar.style";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux";
import Sidebar from "../../components/SideBar/Sidebar";

const Navbar = () => {
  let [ad, setAd] = useState([]);
  let [search, setSearch] = useState(false);
  let dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let user = useSelector((state) => state.user.user);
  let { usercart } = useSelector((state) =>
    state.user ? state.user : undefined
  );

  let { email } = useSelector((state) =>
    state.user.user !== null ? state.user.user : { undefined }
  );

  let navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());

    navigate(`/`);
  };

  const handleClick = () => {
    navigate(`/login`);
  };

  const handleClickSignUp = () => {
    navigate(`/signup`);
  };

  const cartPage = () => {
    navigate(`/cart`);
  };

  const goToAcc = () => {
    navigate("/me");
  };

  const gotoHome = () => {
    navigate("/");
  };

  // }, 2000);
  const iconStyle = {
    cursor: "pointer",
    fontSize: "2.5vw",
    marginLeft: "3.05vw",
  };

  return (
    <>
      <NavbarCss>
        <Sidebar /> 
        <Logo onClick={gotoHome}>
          <img src={logo} />
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
              <FaUserAlt
                className="iconcls"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
            </>
          ) : (
            <>
              {" "}
              <a onClick={logoutUser}>Logout</a>
              <div onClick={goToAcc} className="iconcls profile"></div>
              {email === "admin@example.com" ? (
                <h2
                  className="admin"
                  onClick={() => {
                    navigate(`/admin`);
                  }}
                  style={{ fontSize: "8px", color: "yellow" }}
                >
                  Admin
                </h2>
              ) : (
                ""
              )}
            </>
          )}
          <>
            <FaShoppingCart
              onClick={cartPage}
              className="iconcls"
              style={{ cursor: "pointer" }}
            />

            {isAuthenticated === true ? <p>{usercart.length}</p> : ""}
          </>
        </Icon>
      </NavbarCss>
    </>
  );
};

export default Navbar;
