import styled from "styled-components";

export const Theme = {
  color1: "blue"
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
