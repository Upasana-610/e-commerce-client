import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin: 1% 0;
  font-size: 4vw;
  letter-spacing: 50%;
`;

export const Headingscss = styled.div`
  margin: 0 8% 5% 8%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 650px) {
    margin: 0px 6% 6% 6%;
    grid-template-columns: auto auto;
  }
`;

export const Buttoncss = styled.div`
  button {
    width: 10vw;
    border-radius: 5px;
    margin: 0 45% 2% 45%;
    height: 5vw;
    font-size: 1.25vw;
    padding: 1vw 1.5vw;
    letter-spacing: 3px;
    background-color: black;
    color: white;
    border: none;
  }
  button:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      130deg,
      rgba(0, 0, 0, 1) 14%,
      rgba(116, 116, 126, 1) 30%,
      rgba(0, 0, 0, 1) 48%,
      rgba(116, 116, 126, 1) 75%,
      rgba(0, 0, 0, 1) 91%,
      rgba(0, 0, 0, 1) 7076%
    );
    cursor: pointer;
  }
`;
