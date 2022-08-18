import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Logincss } from "./Login.style";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "./../../redux";

function SignUp() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  let [err, setErr] = useState("");
  let error = useSelector((state) => state.autherr);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    if (error !== err) {
      if (error.id === "REGISTER_FAIL") {
        setErr(error);
      } else {
        setErr(error);
      }
    }
  }, [error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);
    const newUser = { ...formData };
    dispatch(register(newUser));
    //redirect to homepage
    setTimeout(() => navigate(`/`), 5000);
  };
  const clearInputs = (e) => {
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
    e.target.passwordConfirm.value = "";
    setFormData({
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
    });
  };

  return (
    <Layout>
      <Logincss>
        <h2>Sign in to your account</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="name"
              id="#name"
              name="name"
              onChange={handleChange}
              placeholder="name"
              required
            />
          </div>
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

          <div>
            <label htmlFor="passwordConfirm" className="form__label">
              Password Confirm
            </label>
            <input
              type="passwordConfirm"
              id="#passwordConfirm"
              name="passwordConfirm"
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength={"8"}
            />
          </div>

          <input className="button" type="submit" value="Sign Up" />
        </form>
      </Logincss>
    </Layout>
  );
}

export default SignUp;
