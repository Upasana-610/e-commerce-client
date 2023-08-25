import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";

import logo from "./../../image/logo.png";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { NavbarCss, Logo, Icon, Ad } from "./Navbar.style";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux";

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
        <Menu>
          <a
            id="Checkout My Github"
            className="menu-item"
            href="https://github.com/Upasana-610"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            id="Resume"
            className="menu-item"
            href="https://drive.google.com/file/d/1WoF89w8gamhTccJ6d3cuHgrKnhNE7Pvg/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            id="Contact me on Linked In"
            className="menu-item"
            href="https://www.linkedin.com/in/upasana-pan-610upa/"
            target="_blank"
            rel="noreferrer"
          >
            Linked In
          </a>
          {/* <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a> */}
        </Menu>
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
    </>
  );
};

export default Navbar;
