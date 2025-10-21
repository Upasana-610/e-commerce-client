import styled from "styled-components";

export const Footercs = styled.div`
  height: 30px;
  background-color: #2CB1D2;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;

  h4 {
    font-size: 2vmin;
    margin: 0.8vh;
  }

  @media (max-width: 650px) {
    height: 30px;
    h4 {
      font-size: 3vmin;
      margin: 3px;
      a {
        color: skyblue;
      }
    }
  }
`;

export const Footercss = styled.div`
  /* height: 5vw; */
`;
