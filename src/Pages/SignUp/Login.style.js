import styled from "styled-components";

export const Logincss = styled.div`
  width: 40vw;
  height: 60vh;
  margin: 10vw auto;
  padding: 1.5vw 2vw;
  border: 0.005px solid #bbb;
  border-radius: 0.5vw;
  overflow-y: hidden;
  background-color: rgba(96, 58, 58, 0.3);
  label {
    display: block;
    margin: 0.5vw 0;
  }
  input {
    margin-bottom: 0.5vw;
    height: 2vw;
    background-color: white;
    padding: 1vw;
    border: none;
    border-radius: 0.25vw;
  }
  .form {
    .button {
      background-color: rgb(54, 37, 37);
      padding: 0.5vw 1vw;
      border-radius: 0.25vw;
      color: white;
      border: none;
      margin-top: 0.25vw;
    }

    .button:hover {
      cursor: pointer;
      background-color: brown;
    }
  }
`;
