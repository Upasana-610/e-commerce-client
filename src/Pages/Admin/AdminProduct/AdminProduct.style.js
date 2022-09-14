import styled from "styled-components";

export const ProductContainer = styled.div`
  margin: auto;
  box-shadow: 0px 0px 12px 4px rgba(145, 94, 38, 0.75);
  -webkit-box-shadow: 0px 0px 12px 4px rgba(145, 94, 38, 0.75);
  -moz-box-shadow: 0px 0px 12px 4px rgba(145, 94, 38, 0.75);
  background-color: white;
  margin: 5rem 25rem;
  padding: 30px;
  display: flex;
  align-items: center;
  img {
    max-height: 15vw;
    max-width: 4vw;
    width: auto;
    height: auto;

    border: 0.5px solid rgba(94, 88, 90, 0.55);
  }
  p {
    margin: 2rem;
  }

  h3 {
    margin: 10px;
  }
  h3:hover {
    cursor: pointer;

    border-bottom: 1px solid red;
    color: red;
  }
  div {
    i {
      margin-bottom: 10px;
    }
  }

  .delete {
    text-align: right;
    font-size: 20px;
  }
  .delete:hover {
    cursor: pointer;

    color: red;
  }
  @media (max-width: 857px) {
    padding: 5px;
    margin: 1rem 5rem;
  }
`;
