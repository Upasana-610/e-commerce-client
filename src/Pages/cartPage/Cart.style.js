import styled from "styled-components";

export const Notauth = styled.div`
  margin: 5vmin;
  color: darkred;
  font-size: 4vmin;
`;

export const Auth = styled.div`
  padding: 8vmin;

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
`;

export const Itemcss = styled.div`
  display: flex;
  justify-content: space-around;
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
`;
