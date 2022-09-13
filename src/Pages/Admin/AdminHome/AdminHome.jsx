import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createProduct } from "../../../api/adminapi";
import { useNavigate } from "react-router";
import Layout from "../../../Layout/Layout";
import Form1 from "../Form1";
import Form2 from "../Form2";
import Form3 from "../Form3";
import { StyledButton } from "./AdminHome.style";
const AdminHome = () => {
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    pName: "",
    pColor: "",
    pSize: { S: false, M: false, L: false, XL: false, XXL: false },
    pDescription: "",
    pOccasion: "",
    pFabric: "",
    pFit: "",
    pModelSize: "",
    pModelHeight: "",
    pWash: "",
    pPrice: "",
    pCategory: "",
    pSubCategory: "",
    pImages: { a: "", b: "", c: "", d: "", e: "" },
    pOffer: "",
    pStatus: true,
    pNewArrival: false,
    pTopSellers: false,
  });

  const [page, setPage] = useState(0);

  const componentList = [
    <Form1
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Form2
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Form3
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function notify(str) {
    toast.error(str, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function save() {
    toast.success("Saved Successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const clearInputs = () => {
    setFormData({
      description: "",
      amount: "",
      date: "",
      note: "",
      id: "",
    });
  };

  return (
    <Layout>
      <div className="formdiv">
        <StyledButton
          onClick={() => {
            navigate("/allproducts");
          }}
        >
          Get All Products
        </StyledButton>

        {componentList[page]}
      </div>
    </Layout>
  );
};

export default AdminHome;
