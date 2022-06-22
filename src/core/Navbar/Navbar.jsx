import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./../../image/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { NavbarCss, Logo, Icon, Ad } from "./Navbar.style";
import { fetchnavbarAddata } from "../../api/navbarad";
import { useHistory } from "react-router-dom";
import Slider from "../Slider/Slider";
import { connect } from "react-redux";
import { logout } from "../../redux";

const Navbar = ({ isAuthenticated, user, logout, usercart }) => {
  let [ad, setAd] = useState([]);

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

  useEffect(() => {
    fetchnavData();
  }, []);

  // }, 2000);
  const iconStyle = {
    cursor: "pointer",
    fontSize: "1.5vw",
    marginLeft: "1.05vw",
  };

  return (
    <>
      <NavbarCss>
        <GiHamburgerMenu size={25} style={{ cursor: "pointer" }} />
        <Logo>
          <img src={logo} />
          <p>Roar</p>
        </Logo>

        <Icon
          photo={isAuthenticated === true ? `/img/users/${user.photo}` : ""}
        >
          {isAuthenticated !== true ? (
            <>
              <h6 style={iconStyle} onClick={handleClickSignUp}>
                {" "}
                Sign Up
              </h6>
              <AiOutlineUser
                size={25}
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              />
            </>
          ) : (
            <>
              {" "}
              <h6 style={iconStyle} onClick={logoutUser}>
                Logout
              </h6>
              <div></div>
            </>
          )}

          <BiSearchAlt2 size={25} style={iconStyle} />
          <BsHandbag size={25} style={iconStyle} onClick={cartPage} />
          {isAuthenticated === true ? <p>{usercart.length}</p> : ""}
        </Icon>
      </NavbarCss>
      <Slider data={ad} height={"5vh"} color="rgb(34, 26, 26)" />
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
