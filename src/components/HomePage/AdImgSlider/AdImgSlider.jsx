import React, { useEffect, useState } from "react";
import { fetchAdImgdata } from "../../../api/AdImgSliderApi";
import Slidercomp from "../../../core/Slider/Slider";

function AdImgSlider() {
  let [adImg, setAdImg] = useState([]);

  const fetchAdImgSliderdata = async () => {
    try {
      let data = await fetchAdImgdata();
      setAdImg(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdImgSliderdata();
  }, []);
  return (
    <>
      <Slidercomp data={adImg} height={`120%`} />
    </>
  );
}

export default AdImgSlider;
