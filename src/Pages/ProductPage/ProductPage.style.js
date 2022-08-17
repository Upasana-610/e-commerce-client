import styled from "styled-components";

export const Productcover = styled.div`
  padding: 5vw;
  overflow-x: hidden;

  h3 {
    margin: 3rem 0;
    font-weight: 300;
    font-size: 3rem;
  }

  dt {
    font-weight: 100;
    font-size: 2rem;
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
    /* margin-left: 10vmin; */
  }
  .Big {
    /* margin-left: 10vmin; */

    font-size: 3rem;
  }

  button {
    background-color: rgba(70, 4, 15, 0.99);
    color: white;
    margin-top: 5vmin;
    /* margin-left: 10vmin; */
    padding: 2vmin;
    font-size: 2vmin;
    border: none;
  }

  button:hover {
    background-color: darkblue;
    cursor: pointer;
  }
  .desc {
    /* margin-left: 10vmin; */
    /* p {
      margin-left: 10vmin;
    } */

    h3 {
      margin: 3rem 0;
      font-weight: 600;
      font-size: 2rem;
    }

    dt {
      font-weight: 100;
      font-size: 2rem;
    }
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
  padding-right: 15rem;
  div {
    display: flex;
    flex-direction: column;
    img {
      max-height: 15rem;
      max-width: 4rem;
      width: auto;
      height: auto;
      margin: 1vw;
      margin-left: 10rem;
    }

    img.active {
      border: 2px black solid;
    }

    .activeImg {
      max-width: 50rem;
      max-height: 50rem;
      width: auto;
      height: auto;
      margin: 2vw;
      margin-bottom: 3vw;
    }

    .desc {
      margin: 0 5rem;
    }
  }

  @media (max-width: 650px) {
    padding-right: 2rem;
    div {
      margin-left: 8vw;

      img {
        max-height: 8rem;
        max-width: 3rem;
        margin-left: 0.25rem;
      }
      .activeImg {
        max-width: 30rem;
        max-height: 30rem;
      }
    }
  }
`;

export const ProductDetails = styled.div`
  padding-top: 2vw;
  margin: 0 5rem;

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
  margin-top: 20px;
  /* margin-left: 10vmin; */

  ul {
    display: flex;
    /* justify-content: space-between; */
    list-style: none;
    align-items: center;
  }
  li {
    border: 1px solid #ccc;
    font-size: 1.25vw;
    padding: 1.5vw;
    margin-right: 0.25vw;
    margin-top: 2vw;
    border-radius: 20%;
  }

  li:hover {
    background-color: rgba(70, 4, 15, 0.99);
    color: #ccc;
    cursor: pointer;
    border: 1px solid black;
  }
  .selected {
    background-color: rgba(70, 4, 15, 0.99);
    color: #ccc;
  }

  @media (max-width: 650px) {
    li {
      font-size: 1.25rem;
    }
  }
`;

export const Qty = styled.div`
  /* margin-left: 10vmin; */
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
      font-size: 1.25rem;
    }
    .bt:hover {
      cursor: pointer;
      background-color: aliceblue;
    }
  }
`;
