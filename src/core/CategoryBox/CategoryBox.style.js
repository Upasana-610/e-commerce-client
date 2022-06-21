import styled from "styled-components";

export const CategoryBoxcss = styled.div`
  :hover {
    cursor: pointer;
    background-color: antiquewhite;
  }
  .img {
    width: 23vw;
    height: 23vw;
    /* background-color: aliceblue; */
    background: url(${({ image }) => image}) no-repeat center;

    margin: 2vw;
    background-size: auto 100%;
    position: relative;

    h3 {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 1vw;
      color: black;
      /* width: 100px; */
      text-align: right;
      font-size: 2vmin;
    }
  }
`;
