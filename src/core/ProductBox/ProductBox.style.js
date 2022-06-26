import styled from "styled-components";

export const ProductBoxcss = styled.div`
  width: 18vw;
  margin: 10%;
  @media (max-width: 650px) {
    margin: 0px 6% 6% 6%;
    width: 30vw;
  }
`;

export const Imagebox = styled.div`
  /* margin-bottom: 15%; */
  overflow: hidden;
  div {
    position: relative;
    .img {
      width: 20vw;
      height: 30vw;
      margin: 10% 0;
      background: url(${({ pImage }) => pImage}) no-repeat center;
      background-size: auto 100%;

      @media (max-width: 650px) {
        width: 32vw;
        height: 42vw;
      }
    }
  }
  .button {
    display: none;
    font-size: 1vw;
    background-color: black;
    color: white;
    width: 90%;
    margin: 3% 5%;
    height: 8%;
    outline: none;
    border: none;
    position: absolute;
    bottom: 1%;
    left: 0;
    z-index: 1;
    display: none;

    @media (max-width: 650px) {
      margin: 3% 13%;
      width: 80%;
      font-size: 2vw;
    }
  }

  div:hover {
    /* .img ,
    .img:hover,
    .button:hover {
      cursor: pointer;
      display: inline-block;
    } */
    cursor: pointer;

    .img {
      background: url(${({ pImageHover }) => pImageHover}) no-repeat center;
      background-size: auto 100%;
    }
    .button {
      display: inline-block;
      cursor: pointer;
    }
  }
`;
export const Details = styled.div`
  font-size: 0.95vw;
  width: 20vw;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 650px) {
    width: 30vw;
    @media (max-width: 650px) {
    }
    font-size: 1.95vw;
  }
`;
export const Size = styled.div`
  /* padding: 10px; */
  /* margin: 10px 45px; */
  width: 15vw;
  margin: 0.225vw;
  @media (max-width: 650px) {
    width: 25vw;
  }
  ul {
    display: flex;
    /* justify-content: space-between; */
    list-style: none;
    align-items: center;
    width: 70%;
    margin: auto;
  }
  li {
    border: 1px solid #ccc;
    font-size: 1vw;
    padding: 0.5vw;
    margin: 0.25vw;
    border-radius: 20%;
    @media (max-width: 650px) {
      font-size: 2vw;
    }
  }

  li:hover {
    background-color: black;
    color: #ccc;
    cursor: pointer;
    border: 1px solid black;
  }
`;
