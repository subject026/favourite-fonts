import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const HeaderStyled = styled.header`
  ${({ theme }) => {
    return css`
      padding: 30px ${theme.padding};
      display: flex;
      justify-content: space-between;

      a {
        display: inline-block;
        margin-left: 30px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        transition: color 0.3s linear;
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
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
        <Nav>
          <a href="#">CATALOGUE</a>
          <a href="#">FEATURED</a>
          <a href="#">ARTICLES</a>
          <a href="#">ABOUT</a>
        </Nav>
      </HeaderStyled>
    );
  }
}

export default Header;
