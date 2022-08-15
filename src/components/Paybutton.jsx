import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../api/password";

import React from "react";
import { bookTour } from "../api/stripe";
import { showAlert } from "../api/alerts";

const Paybutton = () => {
  let { usercart, user } = useSelector((state) => state.user);

  const handleCheckout = () => {
    const res = bookTour({ usercart, user });
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default Paybutton;
