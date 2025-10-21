import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin: 1% 0;
  font-size: 4vw;
  font-weight: 100;
  letter-spacing: 50%;
`;

export const Heading2 = styled.h1`
  text-align: center;
  margin: 1% 0;
  font-size: 2vw;
  font-weight: 100;
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
    left: 50%;
    transform:translateX(-30%) ;
    width: 15vw;
    border-radius: 5px;
    margin: 0 45% 2% 45%;
    height: 5vw;
    font-size: 1.25vw;
    padding: 1vw 1.5vw;
    letter-spacing: 3px;
    background: #2cb1d2df;
    background: linear-gradient(
      90deg,
      rgba(44, 177, 210, 1) 3%,
      rgba(76, 220, 137, 1) 87%
    );
    color: white;
    border: none;
  }
  button:hover {
    background: #0bf5dddf;
    background: linear-gradient(
      90deg,
      rgba(50, 210, 44, 1) 3%,
      rgba(3, 244, 103, 1) 87%
    );
    cursor: pointer;
  }
`;
