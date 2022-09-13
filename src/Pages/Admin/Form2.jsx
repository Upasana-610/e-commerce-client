import React from "react";

const Form2 = ({ page, setPage, formData, setFormData }) => {
  return (
    <>
      <form>
        <input
          className="text"
          type="text"
          placeholder="Product Fabric"
          name="pFabric"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pFabric}
        />
        <input
          className="text"
          type="text"
          placeholder="Product Fit"
          name="pFit"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pFit}
        />
        <input
          className="text"
          type="text"
          placeholder="Product Model Size"
          name="pModelSize"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pModelSize}
        />
        <input
          className="text"
          type="text"
          placeholder="Product Model Height in feet"
          name="pModelHeight"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pModelHeight}
        />
        <input
          className="text"
          type="text"
          placeholder="Product Wash"
          name="pWash"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pWash}
        />

        <input
          className="text"
          type="number"
          placeholder="Product Price"
          name="pPrice"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pPrice}
        />
        <div className="Availsize">
          <label for="category">Select Category</label>

          <select
            name="pCategory"
            id="category"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.pCategory}
            className="text"
          >
            <option>--select an option--</option>

            <option value="BottomWear">Bottom Wear</option>
            <option value="CoOrds">Co-ords</option>
            <option value="Jackets">Jackets</option>
            <option value="Shirts">Shirts</option>
            <option value="Sweaters">Sweaters</option>
            <option value="Tshirts">Tshirts</option>
          </select>

          {formData.pCategory === "Shirts" ? (
            <>
              <label for="subcategory">Select Subcategory</label>
              <select
                name="pSubCategory"
                id="subcategory"
                className="text"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                value={formData.pSubCategory}
              >
                <option value="">--select an option--</option>
                <option value="Checks">Checks</option>
                <option value="Linen">Linen</option>
                <option value="Plain">Plain</option>
                <option value="Stripe">Stripe</option>{" "}
              </select>
            </>
          ) : formData.pCategory === "Tshirts" ? (
            <>
              <label for="subcategory">Select Subcategory</label>

              <select name="pSubcategory" id="subcategory" className="text">
                <option value="">--select an option--</option>

                <option value="Basics">Basics</option>
                <option value="Graphic Printed">Graphic Printed</option>
                <option value="Oversized">Over Sized</option>
                <option value="Polo">Polo</option>
              </select>
            </>
          ) : (
            ""
          )}
          <div className="button-area">
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form2;
