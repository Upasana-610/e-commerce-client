import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Logincss } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, register } from "../../redux";
import { cartAdding } from "../../api/cartapi";
import { forgetPassword } from "../../api/password";

function ForgotPass() {
  let [emailData, setemailData] = useState({ email: "" });
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleChange = (e) => {
    setemailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);

    //redirect to homepage
    forgetPassword(emailData);

    // setTimeout(() => navigate(`/`), 5000);
  };
  const clearInputs = (e) => {
    e.target.email.value = "";

    setemailData({
      email: "",
    });
  };

  return (
    <Layout>
      <Logincss>
        <h3>Enter Your Email Address</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              required
              id="#email"
              onChange={handleChange}
            />
          </div>

          <input className="button" type="submit" value="Submit" />
        </form>
      </Logincss>
    </Layout>
  );
}

export default ForgotPass;
