import React from "react";
import AdImgSlider from "../../components/HomePage/AdImgSlider/AdImgSlider";

import Layout from "../../Layout/Layout";

import Headings from "../../components/HomePage/Heading/Headings";
import Categories from "../../components/HomePage/Categories/Categories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function HomePage() {
  let { email } = useSelector((state) =>
    state.user.user !== null ? state.user.user : { undefined }
  );
  let navigate = useNavigate();

  const goToAdmin = () => {
    navigate(`/admin`);
  };
  return (
    <>
      {/* <Navbar />

      <AdImgSlider /> */}
      {email === "admin@example.com" ? goToAdmin() : ""}
      {console.log(email)}
      <Layout>
        <AdImgSlider />
        <Categories />
        <Headings heading={"New Arrivals"} data={"newarrivals"} />
        <Headings heading={"Top Sellers"} data={"topsellers"} />
        {/* <Searchbar />
        <Slidebar /> */}
      </Layout>
    </>
  );
}

export default HomePage;
