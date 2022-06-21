import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Logincss } from "./Login.style";
import { useHistory } from "react-router-dom";
import { login } from "../../api/login";
import { connect } from "react-redux";
import { loginUser, register } from "./../../redux";
import { cartAdding } from "../../api/cartapi";
function Login({ isAuthenticated, error, register, loginUser, user, id }) {
  let [formData, setFormData] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);

    //redirect to homepage
    loginUser(formData);

    setTimeout(() => history.push(`/`), 5000);
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
      </Logincss>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    error: state.error,
    id: state.autherr.id,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    register: () => dispatch(register()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
