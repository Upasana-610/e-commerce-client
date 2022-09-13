import React from "react";

const Form1 = ({ page, setPage, formData, setFormData }) => {
  return (
    <>
      <form>
        <input
          className="text"
          type="text"
          placeholder="Product Name"
          name="pName"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pName}
        />

        <input
          className="text"
          type="text"
          placeholder="Product Color"
          name="pColor"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pColor}
        />

        <label for="size">Choose Sizes Available</label>
        <div className="Availsize">
          <input
            type="checkbox"
            id="S"
            name="S"
            value="S"
            checked={formData.pSize.S}
            onChange={(e) =>
              setFormData({
                ...formData,
                ["pSize"]: {
                  ...formData.pSize,
                  ["S"]: formData.pSize.S ? false : true,
                },
              })
            }
          />
          <label for="S">S</label>
          <br />

          <input
            type="checkbox"
            id="M"
            name="M"
            value="M"
            checked={formData.pSize.M}
            onChange={(e) =>
              setFormData({
                ...formData,
                ["pSize"]: {
                  ...formData.pSize,
                  ["M"]: formData.pSize.M ? false : true,
                },
              })
            }
          />
          <label for="M">M</label>
          <br />

          <input
            type="checkbox"
            id="L"
            name="L"
            value="L"
            checked={formData.pSize.L}
            onChange={(e) =>
              setFormData({
                ...formData,
                ["pSize"]: {
                  ...formData.pSize,
                  ["L"]: !formData.pSize.L,
                },
              })
            }
          />
          <label for="L">L</label>
          <br />

          <input
            type="checkbox"
            id="XL"
            name="XL"
            value="XL"
            checked={formData.pSize.XL}
            onChange={(e) =>
              setFormData({
                ...formData,
                ["pSize"]: {
                  ...formData.pSize,
                  ["XL"]: !formData.pSize.XL,
                },
              })
            }
          />
          <label for="XL">XL</label>
          <br />

          <input
            type="checkbox"
            id="2XL"
            name="2XL"
            value="2XL"
            checked={formData.pSize.XXL}
            onChange={(e) =>
              setFormData({
                ...formData,
                ["pSize"]: {
                  ...formData.pSize,
                  ["XXL"]: formData.pSize["XXL"] ? false : true,
                },
              })
            }
          />
          <label for="2XL">2XL</label>
          <br />
        </div>

        <textarea
          className="text"
          type="text"
          cols="10"
          rows="10"
          placeholder="Product Description"
          name="pDescription"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pDescription}
        />

        <textarea
          className="text"
          type="text"
          cols="10"
          rows="10"
          placeholder="Product Occasion"
          name="pOccasion"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.pOccasion}
        />

        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Form1;
