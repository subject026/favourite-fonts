import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { NavToggleButton } from "../Buttons/index";
import Logo from "./Logo";
import { $nav_transition } from "../../mixins";

const HeaderStyled = styled.header`
  ${({ theme }) => {
    return css`
      padding: 30px ${theme.layout.padding};
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${theme.colors.lightestGrey};
    `;
  }}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  ${({ theme, navIsHidden }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      display: flex;
      width: 300px;
      flex-direction: column;
      background-color: white;
      transform: translateX(-110%);
      transition: ${$nav_transition};
      ${!navIsHidden
        ? css`
            transform: translateX(0);
          `
        : ``}
      @media (min-width: 730px) {
        position: static;
        transform: translateX(0);
        height: auto;
        width: auto;
        flex-direction: row;
        align-items: center;
        li {
          display: inline-block;
          margin-left: 30px;
        }
        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.1s linear;
          color: ${theme.colors.lightGrey};
          &:hover {
            color: ${theme.colors.darkGrey};
          }
        }
      }
    `;
  }}
`;

class Header extends React.Component {
  render() {
    const { navIsHidden, handleNavToggle } = this.props;
    return (
      <HeaderStyled>
        <LogoContainer>
          <NavToggleButton handleNavToggle={handleNavToggle} />
          <Logo />
        </LogoContainer>
        <Nav navIsHidden={navIsHidden}>
          <Logo navLogo={true} />
          <ul>
            <li>
              <a href="/">CATALOGUE</a>
            </li>
            <li>
              <a href="/">FEATURED</a>
            </li>
            <li>
              <a href="/">ARTICLES</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
          </ul>
        </Nav>
      </HeaderStyled>
    );
  }
}

export default Header;
