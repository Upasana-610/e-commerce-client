import styled from "styled-components";

export const Logincss = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border: 0.005px solid #bbb;
  border-radius: 0.5rem;
  overflow-y: hidden;
  background-color: rgba(96, 58, 58, 0.3);

  h3 {
    font-size: 2rem;
    font-weight: 100;
  }

  input {
    margin-bottom: 3rem;
    height: fit-content;
    background-color: white;
    padding: 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 2rem;
  }

  .form {
    margin-top: 3vmin;
    height: fit-content;
  }
  .form {
    .button {
      background-color: rgba(70, 4, 15, 0.99);
      padding: 1rem 3rem;
      padding-bottom: 1rem;
      border-radius: 0.25rem;
      color: white;
      border: none;
      margin-top: 3.25rem;
      margin-bottom: 2.25rem;
      font-size: 2rem;
    }

    .button:hover {
      cursor: pointer;
      background-color: brown;
    }
  }

  @media (max-width: 650px) {
    width: fit-content;
    height: fit-content;
    padding: 4vw 6vw;
    h2 {
      font-size: 8vw;
    }

    label {
      font-size: 6vw;
      margin-top: 8vw;
    }

    .form {
      height: fit-content;
      margin-top: 8vw;
    }

    input {
      margin-bottom: 3vw;
      height: fit-content;
      background-color: white;
      padding: 3vw;
      border: none;
      border-radius: 0.25rem;
      font-size: 3vw;
      height: fit-content;
      width: fit-content;
      margin-top: 2vw;
      font-size: 5vw;
    }

    .form {
      .button {
        font-size: 4vw;
        margin-top: 10vw;
        margin-bottom: 10vw;
        /* padding: 10vw 7vw 8vw 7vw; */
        padding: 5vw;
        padding-bottom: 5vw;
      }
    }
  }
`;
