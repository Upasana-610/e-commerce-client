import React, { useState } from "react";
import { useEffect } from "react";
import { fetchProduct } from "../../../api/ProductsApi";
import ProductBox from "../../../core/ProductBox/ProductBox";
import { Heading, Buttoncss, Headingscss } from "./Headings.style";
import { useHistory } from "react-router-dom";
const Headings = ({ heading, data }) => {
  let [dataHead, setDataHead] = useState([]);
  let history = useHistory();

  const handleClick = () => {
    history.push(`/collections/${data}`);
  };

  const getHeadingData = async () => {
    try {
      const value = await fetchProduct(data);

      setDataHead(value.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeadingData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Heading>{heading}</Heading>
      <Headingscss>
        {dataHead !== undefined && dataHead.length !== 0 ? (
          dataHead.map((item, idx) =>
            idx <= 7 ? <ProductBox val={item} key={idx} /> : ""
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </Headingscss>
      <Buttoncss>
        <button onClick={handleClick}>View All</button>
      </Buttoncss>
    </div>
  );
};

export default Headings;
