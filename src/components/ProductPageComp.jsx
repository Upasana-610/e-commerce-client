import React from "react";
import { useState } from "react";
import { Qty, Size } from "../Pages/ProductPage/ProductPage.style";

const ProductPageComp = ({
  product,
  cartAdd,
  changeQty,
  selectedSize,
  selected,
  qty,
}) => {
  // let [qty, setQty] = useState(1);
  // let [selected, setSelected] = useState(-1);

  // Qty
  // const changeQty = (sign) => {
  //   let currqty = qty;
  //   if (sign === "+") currqty++;
  //   else {
  //     if (currqty > 0) currqty--;
  //   }
  //   setQty(currqty);
  // };

  // size
  // const selectedSize = (e) => {
  //   if (e.target.textContent !== selected) {
  //     console.log("a");
  //     setSelected(e.target.textContent.trim());
  //   } else setSelected(-1);
  // };

  return (
    <>
      <p className="Big">{product.pName}</p>
      <p className="Big">Rs. {product.pPrice}</p>
      <h4>{product.pOffer ? `Discount ${product.pOffer} % ` : ""}</h4>
      <p className="color">
        Color- <span>{product.pColor}</span>{" "}
      </p>
      <div className="colorCircle" bgcolor="#000000"></div>
      <Size>
        <h2>Size</h2>
        <ul>
          {product.length !== 0 && product.pSize
            ? product.pSize.map((item, idx) => (
                <li
                  onClick={(e) => {
                    selectedSize(e, selected);
                    // console.log(selected);
                  }}
                  className={item === selected ? "selected" : ""}
                  key={idx}
                >
                  {item}
                </li>
              ))
            : ""}
        </ul>
      </Size>
      <Qty>
        <h3>Quantity</h3>
        <div>
          <p
            className="qtyp bt"
            onClick={() => {
              changeQty("-");
            }}
          >
            -
          </p>
          <p className="qtyp">{qty}</p>
          <p
            className="qtyp bt"
            onClick={() => {
              changeQty("+");
            }}
          >
            +
          </p>
        </div>
      </Qty>
      <dl>
        <h3>Description</h3>
        <dt>{product.pDescription}</dt>
        <h3>Occassion</h3>
        <dt>{product.pOccasion}</dt>
        <h3>Fabric</h3>
        <dt>{product.pFabric}</dt>
        <h3>Fit</h3>
        <dt>{product.pFit}</dt>
        <h3>Model Size</h3>
        <dt>{product.pModelSize}</dt>
        <h3>Model Height</h3>
        <dt>{product.pModelHeight}</dt>
        <h3>Wash</h3>
        <dt>{product.pWash}</dt>
      </dl>
      <button onClick={cartAdd}>Add to Cart</button>
    </>
  );
};

export default ProductPageComp;
