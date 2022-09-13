import styled from "styled-components";

export const NavbarCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgba(70, 4, 15, 0.99);
  height: 9vw;
  padding: 3vw 8vmin;

  .iconcls {
    cursor: "pointer";
    font-size: 1.5vw;
    margin-left: 3.05vw;
  }

  @media (max-width: 650px) {
    height: 40vw;

    .iconcls {
      cursor: "pointer";
      font-size: 4.5vw;
      margin-left: 3.05vw;
    }
  }
  input {
    padding: 1vw;
    border: none;

    background-color: #f2f2f2;
    font-size: 1.5vw;
  }

  .hidden {
    display: none;
  }

  @media (max-width: 650px) {
    input {
      font-size: 2.5vw;
    }
  }
`;

export const Logo = styled.div`
  p {
    text-align: center;
    font-size: 1.5vw;
    letter-spacing: 0.5vmin;
    margin-left: 8vw;
  }
  img {
    width: 4vw;
    height: 4vw;
    margin-left: 8vw;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 650px) {
    img {
      width: 10vw;
      height: 10vw;
    }
    p {
      font-size: 3.5vw;
    }
  }
  cursor: pointer;
`;

export const Icon = styled.div`
  display: inline-flex;
  justify-content: space-between;

  .profile {
    border-radius: 100%;
    height: 3vw;
    width: 3vw;
    margin-left: 3vw;

    background: url(${({ photo }) => photo}) no-repeat center;
    background-size: auto 100%;
  }
  .admin:hover {
    color: green;
    cursor: pointer;
  }
  div:hover {
    cursor: pointer;
  }

  p {
    font-size: 1.05vw;
  }

  h6 {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    div {
      height: 5vw;
      width: 5vw;
    }

    p {
      font-size: 3vw;
    }
  }
`;
