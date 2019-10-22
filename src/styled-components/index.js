import styled from "styled-components";

export const Theme = {
  layout: {
    padding: "15px"
  },
  colors: {
    lighterGrey: "rgba(0,0,0, 0.14)",
    lightGrey: "rgba(0,0,0, 0.6)",
    medGrey: "#3c4043",
    darkGrey: "rgba(0,0,0, 0.87)" // thin borders
  }
};

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;

export const StyledFontCard = styled.div`
  font-size: 30px;
  border: 3px solid darkmagenta;
  padding: 50px 0px;
`;
