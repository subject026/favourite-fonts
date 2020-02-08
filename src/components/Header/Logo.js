import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { width } from "../../mixins";

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
            padding: 0 15px;
            border-bottom: 1px solid ${theme.colors.lightestGrey};
            height: 56px;
            ${width.from730px(css`
              display: none;
            `)}
          `
        : ``}
    `;
  }}
`;

export default props => {
  return (
    <Logo {...props}>
      spoogle<span>&nbsp;fonts</span>
    </Logo>
  );
};
