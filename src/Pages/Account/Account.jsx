import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePassword } from "../../api/password";
import Layout from "../../Layout/Layout";
import { Details } from "./Account.style";

const Account = ({ isAuthenticated, user }) => {
  let [formData, setFormData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);

    //redirect to homepage
    updatePassword(formData);
  };

  const clearInputs = (e) => {
    e.target.passwordConfirm.value = "";
    e.target.password.value = "";
    e.target.passwordCurrent.value = "";
    setFormData({
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    });
  };
  return (
    <Layout>
      <Details
        photo={isAuthenticated === true ? `/img/users/${user.photo}` : ""}
      >
        <span className="detail">
          <div className="profile"></div>
          <div className="wrtite">
            <h1>Name</h1>
            <p>{user.name}</p>
            <h1>Email</h1>
            <p>{user.email}</p>
          </div>
        </span>
        <span className="passworddiv">
          <form onSubmit={handleSubmit}>
            <h1>Current Password</h1>
            <input
              type="password"
              placeholder="current password"
              name="passwordCurrent"
              onChange={handleChange}
            />
            <h1>New Password</h1>
            <input
              type="password"
              placeholder="new password"
              name="password"
              onChange={handleChange}
            />

            <h1>New Password Confirm</h1>
            <input
              type="password"
              placeholder="new password"
              name="passwordConfirm"
              onChange={handleChange}
            />
            <input className="button" type="submit" value="Change Password" />
          </form>
        </span>
      </Details>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchtoprops)(Account);
