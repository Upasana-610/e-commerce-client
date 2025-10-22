import React, { useState } from "react";
import { useEffect } from "react";
import { fetchProduct } from "../../../api/ProductsApi";
import ProductBox from "../../../core/ProductBox/ProductBox";
import { Heading, Buttoncss, Headingscss } from "./Headings.style";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PacmanLoader } from "react-spinners";

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
        {dataHead !== undefined && dataHead.length !== 0 ? (
          dataHead.map((item, idx) =>
            idx <= 7 ? <ProductBox val={item} key={idx} /> : ""
          )
        ) : (
          <PacmanLoader
            loading={true}
            color="#3BC6B0"
            cssOverride={{
              display: "block",
              margin: "20% auto",
              borderColor: "blue",
            }}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={40}
          />
        )}
      </Headingscss>
      <Buttoncss>
        <button onClick={handleClick}>VIEW ALL</button>
      </Buttoncss>
    </div>
  );
};

export default Headings;
