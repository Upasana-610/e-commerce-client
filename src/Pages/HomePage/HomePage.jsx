import React, { lazy, Suspense } from "react";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ClockLoader } from "react-spinners";
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
            <Suspense fallback={<Skeleton width="100%" height={300} />}>
              <AdImgSlider />
            </Suspense>

            {/* Lazy load Categories */}
            <Suspense fallback={<Skeleton width="100%" height={150} />}>
              <Categories />
            </Suspense>

            {/* Lazy load Headings sections */}
            <Suspense fallback={<Skeleton width="100%" height={400} count={1} />}>
              <Headings heading={"New Arrivals"} data={"newarrivals"} />
            </Suspense>
            <Suspense fallback={<Skeleton width="100%" height={400} count={1} />}>
              <Headings heading={"Top Sellers"} data={"topsellers"} />
            </Suspense>
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage;
