import styled from "styled-components";

export const OrderCss = styled.div`
  margin: 5rem 20rem;
  .none {
    display: none;
  }
  div {
    padding: 1rem;

    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 2rem;
      margin: 10px;
    }
  }

  @media (max-width: 910px) {
    margin: 2rem 5rem;
    div {
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 530px) {
    div {
      p {
        font-size: 1rem;
      }
    }
  }
`;
