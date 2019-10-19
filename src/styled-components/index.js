import styled from "styled-components";
import { css } from "styled-components";

export const Theme = {
  color1: "blue"
};

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;

export const FontCard = styled.div`
  font-size: 30px;
  border: 3px solid darkmagenta;
`;
