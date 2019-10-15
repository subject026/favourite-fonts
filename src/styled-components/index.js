import styled from "styled-components";
import { css } from "styled-components";

export const Theme = {
  color1: "blue"
};

export const CardGrid = styled.section``;

export const FontCard = styled.div`
  ${({ fontFamily }) => {
    const family = fontFamily.replace(/ /g, "+");
    const url = `https://fonts.googleapis.com/css?family=${family}`;
    return css`
    @import url('${url}');
    font-size: 30px;
    font-family: ${fontFamily};
  `;
  }}
`;
