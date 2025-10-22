import React, { lazy, Suspense } from "react";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ClockLoader, MoonLoader, PacmanLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Lazy-loaded components
const AdImgSlider = lazy(() => import("../../components/HomePage/AdImgSlider/AdImgSlider"));
const Categories = lazy(() => import("../../components/HomePage/Categories/Categories"));
const Headings = lazy(() => import("../../components/HomePage/Heading/Headings"));

function HomePage() {
  const { email } = useSelector((state) =>
    state.user.user !== null ? state.user.user : { undefined }
  );

  const { isLoading } = useSelector((state) => state.user.isLoading);

  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate(`/admin`);
  };

  const loaderStyle = {
    display: "block",
    margin: "20% auto",
    borderColor: "blue",
  };

  return (
    <>
      {email === "admin@example.com" ? goToAdmin() : null}
      <Layout>
        {isLoading ? (
          <ClockLoader
            loading={true}
            color="#ea5a6dff"
            cssOverride={loaderStyle}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={150}
          />
        ) : (
          <>
            {/* Lazy load AdImgSlider */}
            <Suspense fallback={<MoonLoader
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
                        size={100}
                      />}>
              <AdImgSlider />
            </Suspense>

            {/* Lazy load Categories */}
            <Suspense fallback={<PacmanLoader
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
                        size={80}
                      />}>
              <Categories />
            </Suspense>

            {/* Lazy load Headings sections */}
            <Suspense fallback={<MoonLoader
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
                        size={100}
                      /> }>
              <Headings heading={"New Arrivals"} data={"newarrivals"} />
            </Suspense>
            <Suspense fallback={<PacmanLoader
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
                        size={80}
                      />}>
              <Headings heading={"Top Sellers"} data={"topsellers"} />
            </Suspense>
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage;
