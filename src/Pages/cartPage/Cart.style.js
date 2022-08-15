import styled from "styled-components";

export const Notauth = styled.div`
  margin: 5vmin;
  color: darkred;
  font-size: 4vmin;
`;

export const Auth = styled.div`
  padding: 8vmin;

  button {
    background-color: rgba(70, 4, 15, 0.99);
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
`;

export const Itemcss = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  -webkit-box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
  -moz-box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
  box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
  margin: 2vmin;
  :hover {
    cursor: pointer;
    background-color: beige;
  }
  img {
    max-height: 15vw;
    max-width: 4vw;
    width: auto;
    height: auto;
    margin: 1vw;
    margin-left: 10vmin;
    border: 0.5px solid rgba(94, 88, 90, 0.55);
  }
  p {
    p {
      font-size: 4vmin;
    }
    p:hover {
      cursor: pointer;
      color: red;
    }

    h5:hover {
      cursor: pointer;
      color: red;
    }
  }

  .qty {
    width: 3vmin;
    height: 3vmin;
    font-size: 2.5vmin;
    text-align: center;
    border-radius: 50%;
    margin: 1vmin;
    border: 0.15vmin solid black;
  }

  .qty:hover {
    color: red;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Itemmedia = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
    -moz-box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
    box-shadow: 0px -1px 13px 2px rgba(94, 88, 90, 0.55);
    margin: 0.5vmin;
    padding: 2vmin;
    :hover {
      cursor: pointer;
      background-color: beige;
    }

    .qty {
      width: 3vmin;
      height: 3vmin;
      border-radius: 50%;
      margin: 1vmin;
      padding: 2vmin;
      border: 0.25vmin solid black;
    }

    .qty:hover {
      color: red;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    img {
      max-height: 45vw;
      max-width: 20vw;
      width: auto;
      height: auto;
      margin: 1vw;
      margin-left: 10vmin;
      border: 0.5px solid rgba(94, 88, 90, 0.55);
    }
    p {
      font-size: 6vmin;
      p {
        font-size: 5vmin;
      }
      p:hover {
        cursor: pointer;
        color: red;
      }

      h5:hover {
        cursor: pointer;
        color: red;
      }
    }

    .offer {
      text-align: center;
      font-size: 4vmin;
    }

    .delete {
      text-align: right;
    }
  }
`;
