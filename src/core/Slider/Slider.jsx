import React, { useEffect, useRef, useState } from "react";
import { Ad, imgStyle } from "./Slider.style";

function Slider({ data = [], height, width, color = "transparent" }) {
  const [index, setIndex] = useState(0);
  const TimeoutRef = useRef(null);

  const resetTimeout = () => {
    if (TimeoutRef.current) {
      clearTimeout(TimeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    TimeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      9995
    );
    // return () => {
    //   resetTimeout();
    // };
  }, [index]);

  return (
    <>
      {" "}
      <Ad height={height} width={width} color={color}>
        {data.length !== 0 ? (
          data[index].adImg ? (
            <img
              src={`./img/AdSlider/${data[index].adImg}`}
              alt={"ad"}
              // style={{ width: `${width}` }}
            />
          ) : (
            <div> {data[index].ad}</div>
          )
        ) : (
          ""
        )}
      </Ad>
      {/* <div className="slideWindow">
      <div
        className="sliderTracker"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {console.log(ad)}

        {ad.map((item, idx) => (
          <p className="slide" key={idx}>
            {item.ad}
          </p>
        ))}
      </div>
    </div> */}
      {/* {ad.map((item, idx) => (
      <p className={`${index !== idx ? "unactive" : ""}`} key={idx}>
        {item.ad}
      </p>
    ))} */}
    </>
  );
}

export default Slider;
