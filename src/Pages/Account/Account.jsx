import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../redux";
import { updatePassword } from "../../api/password";
import { uploadPhoto } from "../../api/uploadphotoapi";
import Layout from "../../Layout/Layout";
import { Details } from "./Account.style";
import { useDispatch } from "react-redux";
import { showAlert } from "../../api/alerts";

const Account = () => {
  let [formData, setFormData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  let [upload, setupload] = useState(false);
  let [file, setFile] = useState(null);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let user = useSelector((state) => state.user.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs(e);

    //redirect to homepage
    let res = await updatePassword(formData);
    res
      ? dispatch(logout())
      : showAlert("error", "Could not change password! Try again.", 2);
    res ? navigate(`/login`) : navigate(`/me`);
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

  const handleSubmitPhoto = (e) => {
    console.log(e.target.photo);
  };

  const handlePhotoChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };
  return (
    <Layout>
      <Details
        photo={
          isAuthenticated === true && user ? `/img/users/${user.photo}` : ""
        }
      >
        {isAuthenticated === true ? (
          <>
            <span className="detail">
              <div className="profile">
                <h3
                  className="upload"
                  onClick={() => {
                    setupload(true);
                  }}
                >
                  Upload Photo
                </h3>
                {upload ? (
                  <form
                    className="uploadForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log(file);
                      setupload(false);
                      uploadPhoto(file);
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      id="photo"
                      name="photo"
                      onChange={handlePhotoChange}
                    />
                    <input type="submit" value="Upload" className="upbutt" />

                    <button className="upbutt" onClick={() => {}}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  ""
                )}
              </div>
              <div className="write">
                <h1>Name</h1>
                <p>{user.name}</p>
                <h1>Email</h1>
                <p>{user.email}</p>
                <h3
                  onClick={() => {
                    navigate(`/myorders`);
                  }}
                >
                  My Orders
                </h3>
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
                <input
                  className="button"
                  type="submit"
                  value="Change Password"
                />
              </form>
            </span>
          </>
        ) : (
          ""
        )}
      </Details>
    </Layout>
  );
};

export default Account;
