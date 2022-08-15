import React, { useState } from "react";
import { useEffect } from "react";
import { fetchProduct } from "../../../api/ProductsApi";
import ProductBox from "../../../core/ProductBox/ProductBox";
import { Heading, Buttoncss, Headingscss } from "./Headings.style";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Headings = ({ heading, data }) => {
  let [dataHead, setDataHead] = useState([]);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/collections/${data}`);
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
        {dataHead !== undefined && dataHead.length !== 0
          ? dataHead.map((item, idx) =>
              idx <= 7 ? <ProductBox val={item} key={idx} /> : ""
            )
          : new Array(21)
              .fill(100)
              .map((item, idx) => (
                <Skeleton width={300} height={350} key={idx} />
              ))}
      </Headingscss>
      <Buttoncss>
        <button onClick={handleClick}>View All</button>
      </Buttoncss>
    </div>
  );
};

export default Headings;
