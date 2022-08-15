import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Logincss } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, register } from "./../../redux";
import { cartAdding } from "../../api/cartapi";

function Login() {
  let [formData, setFormData] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);

    //redirect to homepage
    dispatch(loginUser(formData));

    setTimeout(() => navigate(`/`), 5000);
  };
  const clearInputs = (e) => {
    e.target.email.value = "";
    e.target.password.value = "";
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <Logincss>
        <h2>Log into your account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              required
              id="#email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              id="#password"
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength={"8"}
            />
          </div>

          <input className="button" type="submit" value="Login" />
        </form>
        <p
          className="forgot"
          onClick={() => {
            navigate("/forgotpassword");
          }}
        >
          Forgot your password?
        </p>
      </Logincss>
    </Layout>
  );
}

export default Login;
