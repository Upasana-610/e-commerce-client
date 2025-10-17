import React from "react";
import AdImgSlider from "../../components/HomePage/AdImgSlider/AdImgSlider";

import Layout from "../../Layout/Layout";

import Headings from "../../components/HomePage/Heading/Headings";
import Categories from "../../components/HomePage/Categories/Categories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ClockLoader } from "react-spinners";


function HomePage() {
  let { email } = useSelector((state) =>
    state.user.user !== null ? state.user.user : { undefined }
  );
 const override = {
    display: "block",
    margin: "20% auto",
    borderColor: "blue",
  };
  let { isLoading } = useSelector((state) =>
    state.user.isLoading === true ? state.user.isLoading : state.user.isLoading
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
        {isLoading ? (
          <ClockLoader
            loading={true}
            color="#ea5a6dff"
            cssOverride={override}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={150}
          />
        ) : (
          <>
            <AdImgSlider />
            <Categories />
            <Headings heading={"New Arrivals"} data={"newarrivals"} />
            <Headings heading={"Top Sellers"} data={"topsellers"} />
          </>
        )}

        {/* <Searchbar />
        <Slidebar /> */}
      </Layout>
    </>
  );
}

export default HomePage;
