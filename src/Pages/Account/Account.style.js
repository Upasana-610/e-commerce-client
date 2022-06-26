import styled from "styled-components";

export const Details = styled.div`
  padding-top: 5vw;
  padding-bottom: 5vw;
  .detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: auto;
    padding: 4vw;
    width: 60vw;
    padding-right: 20vw;
    background-color: rgba(96, 58, 58, 0.3);
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  }

  h1,
  p {
    margin: 1vw;
    color: #401c03;
    font-size: 1.5vw;
  }

  h3 {
    font-size: 1vw;
    border-bottom: blue solid 0.05vw;
  }

  h3:hover {
    color: blue;
  }
  .button {
    display: block;
    background-color: #401c03;
    border-radius: 0.5vmin;
    color: #f2f2f2;
    margin: 2vmin;
    padding: 1vw;
  }

  .button:hover {
    cursor: pointer;
    background-color: black;
  }
  .profile {
    background: url(${({ photo }) => photo}) no-repeat center;
    border-radius: 100%;
    height: 15vw;
    width: 15vw;
    margin-left: 2vw;
    background-color: red;
    background-size: auto 100%;
    margin: 3vw;
  }

  .passworddiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: auto;
    padding: 4vw;
    width: 60vw;
    padding-right: 20vw;
    background-color: white;
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

    text-align: left;
  }

  input {
    padding: 2vw;
    border: none;

    background-color: #f2f2f2;
    font-size: 1.5vw;
  }

  @media (max-width: 650px) {
    .detail {
      width: 80vw;
    }
    .passworddiv {
      width: 80vw;
    }

    h1,
    p {
      font-size: 3vw;
    }

    h3 {
      font-size: 2.5vw;
      color: navy;
    }

    input {
      font-size: 2.5vw;
    }
  }
`;
