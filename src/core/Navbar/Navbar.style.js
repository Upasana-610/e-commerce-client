import styled from "styled-components";

export const NavbarCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  height: 150px;
  padding: 10px 25px;
`;

export const Logo = styled.div`
  p {
    text-align: center;
    font-size: 1.5vw;
    letter-spacing: 2px;
  }
  img {
    width: 80px;
    height: 80px;
    filter: brightness(0) invert(1);
  }
  cursor: pointer;
`;

export const Icon = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 16vw;

  div {
    border-radius: 100%;
    height: 2vw;
    width: 2vw;
    margin-left: 2vw;
    background-color: red;
    background: url(${({ photo }) => photo}) no-repeat center;
    background-size: auto 100%;
  }
  div:hover {
    cursor: pointer;
  }

  /* @media (max-width: 650px) {
    width: 100px;
  } */
`;
