import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { NavToggleButton } from "../Buttons/index";
import Logo from "./Logo";
import { $nav_transition, width } from "../../mixins";
import { HouseIcon, StarIcon, NotepadIcon, InfoIcon } from "../Icons";

const HeaderStyled = styled.header`
  ${({ theme }) => {
    return css`
      padding: 0 ${theme.layout.padding};
      justify-content: space-between;
      border-bottom: 1px solid ${theme.colors.lightestGrey};
      display: flex;
      height: 56px;
      ${width.from730px(css`
        height: 64px;
      `)}
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
      z-index: 10;
      height: 100vh;
      display: flex;
      width: 300px;
      flex-direction: column;
      background-color: white;
      box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
        0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
      transform: translateX(-110%);
      @media(max-width: 730px) {
        transition: ${$nav_transition};
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 4px 0 0 0;
      }
      a {
        display: inline-block;
        height: 48px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: ${theme.colors.lightGrey};
        &:hover {
        color: ${theme.colors.medGrey};
        }
        svg {
          margin-left: 15px;
          margin-right: 24px;
          @media (min-width: 730px) {
            display: none;
          }
        }
      }
      ${
        !navIsHidden
          ? css`
              transform: translateX(0);
            `
          : ``
      }
      ${width.from730px(css`
        position: static;
        transform: translateX(0);
        height: auto;
        width: auto;
        flex-direction: row;
        align-items: center;
        box-shadow: none;
        li {
          display: inline-block;
          margin-left: 30px;
        }
        a {
          font-weight: 500;
          text-transform: uppercase;
        }
      `)}        
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
              <a href="/">
                <HouseIcon />
                Catalogue
              </a>
            </li>
            <li>
              <a href="/">
                <StarIcon />
                Featured
              </a>
            </li>
            <li>
              <a href="/">
                <NotepadIcon />
                Articles
              </a>
            </li>
            <li>
              <a href="/">
                <InfoIcon />
                About
              </a>
            </li>
          </ul>
        </Nav>
      </HeaderStyled>
    );
  }
}

export default Header;
