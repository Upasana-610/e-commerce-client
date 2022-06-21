import React from "react";
import img from "./../../image/photo.jpg";
import { ProductBoxcss, Imagebox, Details, Size } from "./ProductBox.style";
import { useHistory } from "react-router-dom";

const ProductBox = ({ val = [] }) => {
  const history = useHistory();

  const handleProductPage = () => {
    history.push(`/productpage/${val._id}`);
  };

  return (
    <>
      {val.length === 0 ? (
        ""
      ) : (
        <ProductBoxcss onClick={handleProductPage}>
          <Imagebox
            pImage={`/img/Products/Product1/${val.pImages[0]}`}
            pImageHover={`/img/Products/Product1/${val.pImages[1]}`}
          >
            <div>
              <div className="img"></div>
              <button className="button">View</button>
            </div>

            <Details>
              <p>{val.pName}</p>
              <p>Rs {val.pPrice}</p>
            </Details>
            <Size>
              <ul>
                {val.pSize.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Size>
          </Imagebox>
        </ProductBoxcss>
      )}
    </>
  );
};
export default ProductBox;
