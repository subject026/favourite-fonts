import styled from "styled-components";

export const Theme = {
  layout: {
    padding: "15px"
  },
  colors: {
    lightestGrey: "rgba(0,0,0, 0.14)",
    lighterGrey: "rgba(0,0,0, 0.3)",
    lightGrey: "rgba(0,0,0, 0.6)",
    medGrey: "#3c4043",
    darkGrey: "rgba(0,0,0, 0.87)" // thin borders - NO
  }
};

export const CardGrid = styled.section`
  display: grid;
  grid-gap: 30px;
  padding: 30px ${({ theme }) => theme.layout.padding};
  grid-template-columns: minmax(0, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
`;
