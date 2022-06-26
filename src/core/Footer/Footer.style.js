import styled from "styled-components";

export const Footercs = styled.div`
  text-align: center;
  height: 3vw;
  color: white;
  padding-top: 1vw;
  background-color: black;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;

  h4 {
    font-size: 2vmin;
  }

  @media (max-width: 650px) {
    height: 7vw;
    h4 {
      font-size: 3vmin;
      a {
        color: skyblue;
      }
    }
  }
`;

export const Footercss = styled.div`
  height: 5vw;
`;
