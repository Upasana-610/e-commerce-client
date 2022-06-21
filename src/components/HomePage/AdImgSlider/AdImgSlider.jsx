import React, { useEffect, useState } from "react";
import { fetchAdImgdata } from "../../../api/AdImgSliderApi";
import Slider from "../../../core/Slider/Slider";

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
      {/* <div>ghyjgh</div> */}
      {/* <img src={`./img/AdSlider/${adImg[0].adImg}`} /> */}
      {/* <Slider data={adImg} height={"125vx"} /> */}

      <Slider data={adImg} height={`120%`} />
    </>
  );
}

export default AdImgSlider;
