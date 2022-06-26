import styled from "styled-components";

export const Ad = styled.div`
  background-color: ${({ color }) => color};
  /* background-color: red; */
  color: #ccc;

  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height};

  div {
    font-size: ${({ height }) => (height === "3vw" ? "1.05vw" : "100%")};
  }

  /* height: 0vh; */

  position: relative;
  div {
    padding-top: 1vmin;
    letter-spacing: 0.5vw;
    text-align: center;
    animation: scroll 10000ms linear infinite;
  }
  img {
    /* transition: ease 6000ms; */
    animation: scroll 10000ms linear infinite;
    display: block;
    margin: auto;
    width: 95vw;
    padding: 5vmin;
  }

  /* .slideWindow {
  margin: 0 auto;
  width: 50%;
  padding: 0 100px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: green;
}
.sliderTracker {
  display: flex;
  width: calc(1000px * 3);
  animation: scroll 20s linear infinite;
}

.slide {
  width: 1000px;
  display: flex;
  margin: auto;
  align-items: center;
}*/

  @keyframes scroll {
    /* 0% {
      transform: translateX(100%);
    } */

    0% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    97% {
      transform: translateX(0%);
    }

    /* 80% {
    transform: translateX(calc(-1000px * 2));
  } */
    100% {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 650px) {
    height: ${({ height }) => (height === "3vw" ? "8vw" : "100%")};
    div {
      font-size: ${({ height }) => (height === "3vw" ? "3vw" : "100%")};
    }
  }

  /* .slideWindow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
  }

  .sliderTracker {
    white-space: nowrap;
    width: 100%;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;
    text-align: center;
    height: 400px;
    width: 100%;
    border-radius: 40px;
  }

  .unactive {
    display: none;
  } */
`;
