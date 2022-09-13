import React from "react";
import { createProduct } from "../../api/adminapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form3 = ({ page, setPage, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let validate = false;
    console.log(formData);
    validate = validation(formData);
    console.log(validate);

    if (validate) {
      let res = createProduct({ formData, setFormData });
      console.log(res);
      if (res === true) {
        toast("Product Created Successfully!");
        clearInputs();
      } else toast("Something went Wrong! Try Again");
    } else {
      toast("Please Enter All Fields.");
    }
  };

  const clearInputs = () => {
    setFormData({
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
  };

  const validation = (data) => {
    if (
      data.pName === "" ||
      data.pColor === "" ||
      (data.pSize.S === false &&
        data.pSize.M === false &&
        data.pSize.L === false &&
        data.pSize.XL === false &&
        data.pSize["XXL"] === false) ||
      data.pDescription === "" ||
      data.pOccasion === "" ||
      data.pFabric === "" ||
      data.pFit === "" ||
      data.pModelSize === "" ||
      data.pModelHeight === "" ||
      data.pWash === "" ||
      data.pPrice === "" ||
      data.pCategory === "" ||
      data.pImages.a === "" ||
      data.pImages.b === "" ||
      data.pImages.c === "" ||
      data.pImages.d === "" ||
      data.pImages.e === "" ||
      data.pOffer === ""
    )
      return false;
    else return true;
  };
  return (
    <>
      <ToastContainer />
      <form>
        <label htmlFor="pImage">Provide Product Image Links</label>

        <input
          className="text"
          type="text"
          placeholder="Product Image 1"
          name="pImages"
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              ["pImages"]: {
                ...formData.pImages,
                ["a"]: e.target.value,
              },
            });
            console.log(formData);
          }}
          value={formData.pImages.a}
        />

        <input
          className="text"
          type="text"
          placeholder="Product Image 2"
          name="pImages"
          onChange={(e) => {
            setFormData({
              ...formData,
              ["pImages"]: {
                ...formData.pImages,
                ["b"]: e.target.value,
              },
            });
          }}
          value={formData.pImages.b}
        />

        <input
          className="text"
          type="text"
          placeholder="Product Image 3"
          name="pImages"
          onChange={(e) => {
            setFormData({
              ...formData,
              ["pImages"]: {
                ...formData.pImages,
                ["c"]: e.target.value,
              },
            });
          }}
          value={formData.pImages.c}
        />

        <input
          className="text"
          type="text"
          placeholder="Product Image 4"
          name="pImages"
          onChange={(e) => {
            setFormData({
              ...formData,
              ["pImages"]: {
                ...formData.pImages,
                ["d"]: e.target.value,
              },
            });
          }}
          value={formData.pImages.d}
        />

        <input
          className="text"
          type="text"
          placeholder="Product Image 5"
          name="pImages"
          onChange={(e) => {
            setFormData({
              ...formData,
              ["pImages"]: {
                ...formData.pImages,
                ["e"]: e.target.value,
              },
            });
          }}
          value={formData.pImages.e}
        />

        <input
          className="text"
          type="number"
          placeholder="Product Offer"
          name="pOffer"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pOffer}
        />
        <label for="newarrival">New Arrivals</label>
        <select
          name="pNewArrival"
          id="newarrival"
          className="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: !formData.pNewArrival,
            });
          }}
          value={formData.pNewArrival}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label for="topsellers">Top Sellers</label>
        <select
          name="pTopSellers"
          id="topsellers"
          className="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: !formData.pTopSellers,
            });
          }}
          value={formData.pTopSellers}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <div className="button-area">
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
          <input
            className="Submitform"
            type="submit"
            value="Submit Form"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Form3;
