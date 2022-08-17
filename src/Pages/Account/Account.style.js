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
    padding-bottom: 6rem;
  }

  h3 {
    margin: 1vw;
    margin-top: 3vw;
    color: #23088d;
    font-size: 1.5vw;
    border-bottom: 1px solid #23088d;
    display: inline;
  }
  h3:hover {
    color: #5f0808;

    cursor: pointer;
  }

  .write {
    h3 {
      margin: 1vw;
      margin-top: 3vw;
      color: #23088d;
      font-size: 1.5vw;
      border-bottom: 1px solid #23088d;
      display: inline;
    }
    h3:hover {
      color: #5f0808;

      cursor: pointer;
    }
  }

  h1,
  p {
    margin: 1vw;
    color: #401c03;
    font-size: 1.5vw;
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
    background-color: rgba(70, 4, 15, 0.99);
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
    position: relative;
  }

  .upload {
    position: absolute;
    left: 50%;
    top: 85%;

    width: 10vw !important;
    transform: translate(-50%, 0);
  }

  .upload:hover {
    /* border-bottom: 1px solid #401c03; */
    cursor: pointer;
  }

  .uploadForm {
    height: fit-content;
    width: fit-content;
    background-color: #f2f2f2;
    padding: 3vmin;
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

    .upbutt {
      text-align: center;
      padding: 1vmin;
      background-color: #401c03;
      font-size: 1.5vmin;
      margin-right: 0.5vmin;
      color: white;
      border-radius: 2vmin;
    }
    .upbutt:hover {
      cursor: pointer;
      background-color: navy;
    }
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
