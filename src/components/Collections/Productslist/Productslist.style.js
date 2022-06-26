import styled from "styled-components";

export const Productlistcss = styled.div`
  margin: 0 8% 5% 8%;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 650px) {
    grid-template-columns: auto auto;
  }
`;
