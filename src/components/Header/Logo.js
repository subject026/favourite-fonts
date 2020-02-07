import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Logo = styled.span`
  ${({ theme, navLogo }) => {
    return css`
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: 800;
      color: ${theme.colors.medGrey};
      span {
        color: ${theme.colors.lightGrey};
      }
      ${navLogo
        ? css`
            @media (min-width: 730px) {
              display: none;
            }
          `
        : ``}
      @media (min-width: 730px) {
        font-size: 30px;
      }
    `;
  }}
`;

export default props => {
  return (
    <Logo {...props}>
      Favourite<span>&nbsp;fonts</span>
    </Logo>
  );
};
