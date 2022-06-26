import styled from "styled-components";

export const Productcover = styled.div`
  padding: 5vw;
  overflow-x: hidden;
  p {
    margin-left: 10vmin;
    font-size: 4vw;
  }
  h5 {
    margin: 3vw;
  }

  .color {
    font-size: 3vmin;
    margin-top: 2vmin;
    font-weight: 500;
    span {
      font-weight: 100;
    }
  }

  .colorCircle {
    border-radius: 50%;
    height: 10vmin;
    width: 10vmin;
    background-color: ${({ pColor }) => (pColor ? pColor : "")};
    margin-top: 3vmin;
    margin-left: 10vmin;
  }
  .Big {
    margin-left: 10vmin;

    font-size: 5vmin;
  }
  button {
    background-color: black;
    color: white;
    margin-top: 5vmin;
    margin-left: 10vmin;
    padding: 2vmin;
    font-size: 2vmin;
    border: none;
  }

  button:hover {
    background-color: darkblue;
    cursor: pointer;
  }

  @media (min-width: 1080px) {
    .desc {
      display: none;
    }
  }
`;

export const Productcss = styled.div`
  display: flex;
  padding: 100px 0;
  padding-right: 15vmin;
  div {
    display: flex;
    flex-direction: column;
    img {
      max-height: 15vw;
      max-width: 4vw;
      width: auto;
      height: auto;
      margin: 1vw;
      margin-left: 10vmin;
    }

    img.active {
      border: 2px black solid;
    }

    .activeImg {
      max-width: 65vw;
      max-height: 70vw;
      width: auto;
      height: auto;
      margin: 2vw;
      margin-bottom: 3vw;
    }

    .desc {
    }
  }

  @media (max-width: 650px) {
    div {
      margin-left: 8vw;
    }
  }
`;

export const ProductDetails = styled.div`
  padding-top: 2vw;

  p,
  h7 {
    margin-left: 10vmin;
  }

  h3 {
    margin: 1vw 0;
  }

  .color {
    font-size: 3vmin;
    margin-top: 2vmin;
    font-weight: 500;
    span {
      font-weight: 100;
    }
  }

  .colorCircle {
    border-radius: 50%;
    height: 10vmin;
    width: 10vmin;
    background-color: ${({ pColor }) => (pColor ? pColor : "")};
    margin-top: 3vmin;
    margin-left: 10vmin;
  }
  .Big {
    margin-left: 10vmin;

    font-size: 5vmin;
  }

  dl {
    margin-top: 5vmin;
    margin-left: 10vmin;
  }
  dt {
    font-weight: 500;
    margin-top: 3vmin;
  }
  button {
    background-color: black;
    color: white;
    margin-top: 5vmin;
    margin-left: 10vmin;
    padding: 2vmin;
    font-size: 2vmin;
    border: none;
  }

  button:hover {
    background-color: darkblue;
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    visibility: hidden;
    height: 6vw;
    div {
      margin-left: 30vw;
    }
  }
`;

export const Size = styled.div`
  /* padding: 10px; */
  /* margin: 10px 45px; */
  width: 15vw;
  margin: 5vmin;
  margin-left: 10vmin;

  ul {
    display: flex;
    /* justify-content: space-between; */
    list-style: none;
    align-items: center;
    margin: auto;
  }
  li {
    border: 1px solid #ccc;
    font-size: 1.25vw;
    padding: 1.5vw;
    margin: 0.25vw;
    margin-top: 2vw;
    border-radius: 20%;
  }

  li:hover {
    background-color: black;
    color: #ccc;
    cursor: pointer;
    border: 1px solid black;
  }
  .selected {
    background-color: black;
    color: #ccc;
  }

  .Description {
    dt {
      display: block;
    }
  }

  @media (max-width: 650px) {
    li {
      font-size: 3.25vw;
    }
  }
`;

export const Qty = styled.div`
  margin-left: 10vmin;
  div {
    border: 0.5px solid black;
    width: fit-content;
    display: flex;
    flex-direction: row;
    text-align: center;
    border-radius: 0.05vmin;
    margin-top: 3vmin;

    .qtyp {
      text-align: center;
      margin: 0;
      padding: 1vmin 2vmin;
      border-left: 0.5px solid black;
    }
    .bt:hover {
      cursor: pointer;
      background-color: aliceblue;
    }
  }
`;
