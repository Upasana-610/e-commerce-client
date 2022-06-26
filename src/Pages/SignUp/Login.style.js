import styled from "styled-components";

export const Logincss = styled.div`
  width: 40vw;
  height: 40vw;
  margin: 10vw auto;
  padding: 1.5vw 2vw;
  border: 0.005px solid #bbb;
  border-radius: 0.5vw;
  overflow-y: hidden;
  background-color: rgba(96, 58, 58, 0.3);

  h2 {
    font-size: 2.4vw;
  }

  label {
    display: block;
    margin: 0.5vw 0;
    font-size: 1vw;
  }
  input {
    margin-bottom: 0.5vw;
    height: 2vw;
    background-color: white;
    padding: 1vw;
    border: none;
    border-radius: 0.25vw;
    font-size: 1vw;
  }

  .form {
    height: 40vw;
  }
  .form {
    .button {
      background-color: rgb(54, 37, 37);
      padding: 0.5vw 1vw;
      border-radius: 0.25vw;
      color: white;
      border: none;
      margin-top: 0.25vw;
      font-size: 1vw;
    }

    .button:hover {
      cursor: pointer;
      background-color: brown;
    }
  }

  @media (max-width: 650px) {
    width: 80vw;
    height: 200vw;
    padding: 4vw 6vw;
    h2 {
      font-size: 2.4vw;
    }

    label {
      font-size: 6vw;
      margin-top: 8vw;
    }

    .form {
      height: 130vw;
      margin-top: 8vw;
    }

    input {
      height: 10vw;
      width: 60vw;
      margin-top: 8vw;
      font-size: 3vw;
    }

    .form {
      .button {
        font-size: 7vw;
        margin-top: 10vw;
        /* padding: 10vw 7vw 8vw 7vw; */
        padding: 5vw;
        padding-bottom: 14vw;
      }
    }
  }
`;
