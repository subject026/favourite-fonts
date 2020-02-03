import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const HeaderStyled = styled.header`
  ${({ theme }) => {
    return css`
      padding: 30px ${theme.layout.padding};
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${theme.colors.lightestGrey};

      nav {
        display: flex;
        align-items: center;
      }

      a {
        display: inline-block;
        margin-left: 30px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.1s linear;
        color: ${theme.colors.lightGrey};
        &:hover {
          color: ${theme.colors.darkGrey};
        }
      }
    `;
  }}
`;

const Logo = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 30px;
      font-weight: 800;
      color: ${theme.colors.medGrey};
      span {
        color: ${theme.colors.lightGrey};
      }
    `;
  }}
`;

class Header extends React.Component {
  state = {
    menuIsHidden: true
  };

  render() {
    return (
      <HeaderStyled>
        <Logo>
          Favourite <span>fonts</span>
        </Logo>
        <nav>
          <a href="https://subject026.github.io/favourite-fonts">CATALOGUE</a>
          <a href="https://subject026.github.io/favourite-fonts">FEATURED</a>
          <a href="https://subject026.github.io/favourite-fonts">ARTICLES</a>
          <a href="https://subject026.github.io/favourite-fonts">ABOUT</a>
        </nav>
      </HeaderStyled>
    );
  }
}

export default Header;
