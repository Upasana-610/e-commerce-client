import React, { useEffect, useRef, useState } from "react";
import { Ad, imgStyle } from "./Slider.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Slidercomp = ({ data = [], height, width, color = "transparent" }) => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    // variableWidth: true,
  };

  let styles = {
    height: "90%",
    width: "70%",
  };
  console.log(data);
  return (
    <>
      {" "}
      {data.length !== 0 ? (
        <Ad>
          (
          <Slider {...settings}>
            {data.map((item, idx) => (
              <img
                src={`./img/AdSlider/${item.adImg}`}
                alt={"ad"}
                style={{ width: "8%" }}
                key={idx}
              />
            ))}
          </Slider>
          )
        </Ad>
      ) : (
        <Skeleton height={500} />
      )}
    </>
  );
};

export default Slidercomp;
