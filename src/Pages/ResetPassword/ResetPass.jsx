import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Logincss } from "./Login.style";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { register, clearErrors } from "./../../redux";
import { ResetPassword } from "../../api/password";

function ResetPass() {
  let params = useParams();

  let token = params.token;
  let [formData, setFormData] = useState({
    passwordConfirm: "",
    name: "",
    token,
  });
  let [err, setErr] = useState("");
  let { autherr } = useSelector((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    if (autherr !== err) {
      if (autherr.id === "AUTH_FAIL") {
        setErr(autherr);
      } else {
        setErr(autherr);
      }
    }
  }, [autherr]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);
    const resetData = { ...formData };
    ResetPassword(resetData);
    //redirect to homepage
    setTimeout(() => navigate(`/login`), 5000);
  };
  const clearInputs = (e) => {
    e.target.password.value = "";

    e.target.passwordConfirm.value = "";
    setFormData({
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <Layout>
      <Logincss>
        <h2>Reset Your Password</h2>

        <form className="form" onSubmit={handleSubmit}>
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

          <input className="button" type="submit" value="Submit" />
        </form>
      </Logincss>
    </Layout>
  );
}

export default ResetPass;
