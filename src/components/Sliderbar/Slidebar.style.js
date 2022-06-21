import styled from "styled-components";

export const Cross = styled.p`
  padding: 20px;
  position: relative;
  left: 272px;
  @media (max-width: 700px) {
    left: 200px;
  }
`;

export const Slidebarcss = styled.ul`
  width: 350px;
  height: 573px;
  /* background-color: red; */
  overflow-y: scroll;
  li {
    cursor: pointer;
    margin: 0px 8px;
    border-top: 1px solid #ccc;
    /* background-color: green; */
    padding: 20px;
    /* width: 80%;
    height: 40px; */
    list-style: none;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const Shop = styled.li`
  div {
    display: flex;
    justify-content: space-between;

    span:nth-child(2) {
      border-left: 1px solid #ccc;
      cursor: pointer;
    }
  }
`;
export const Shopslide = styled.ul`
  display: ${({ toggle }) => (toggle ? "" : "none")};
  li {
    border: 0;
  }
  li:hover {
    background-color: #ccc;
  }
`;
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  li {
    border: 1px solid #ccc;
    margin: 0;
  }
`;
