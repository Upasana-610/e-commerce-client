import React from "react";
import AdImgSlider from "../../components/HomePage/AdImgSlider/AdImgSlider";

import Layout from "../../Layout/Layout";

import Headings from "../../components/HomePage/Heading/Headings";
import Categories from "../../components/HomePage/Categories/Categories";

function HomePage() {
  return (
    <>
      {/* <Navbar />

      <AdImgSlider /> */}
      <Layout>
        <AdImgSlider />
        <Headings heading={"New Arrivals"} data={"newarrivals"} />
        <Headings heading={"Top Sellers"} data={"topsellers"} />
        <Categories />
        {/* <Searchbar />
        <Slidebar /> */}
      </Layout>
    </>
  );
}

export default HomePage;
