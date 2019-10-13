import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: pink;
`;

class Header extends React.Component {
  state = {
    menuIsHidden: true
  };

  render() {
    return (
      <HeaderStyled>
        <h2>Header</h2>
      </HeaderStyled>
    );
  }
}

export default Header;
