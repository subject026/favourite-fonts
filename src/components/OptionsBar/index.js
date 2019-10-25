import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import SearchIcon from "./SearchIcon";

const OptionsBarContainer = styled.section`
  ${({ theme }) => css`
    padding: 20px ${theme.layout.padding};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
  `}
`;

const SearchBlock = styled.label`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

class OptionsBar extends React.Component {
  render() {
    const {
      searchText,
      exampleText,
      fontSize,
      handleSearchTextChange,
      handleExampleTextChange,
      handleFontSizeChange,
      handleOptionsReset
    } = this.props;
    return (
      <OptionsBarContainer>
        <SearchBlock htmlFor="search">
          <SearchIcon />
          <input
            id="search"
            type="text"
            placeholder="Search fonts"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </SearchBlock>
        <input
          type="text"
          placeholder="Type something"
          value={exampleText}
          onChange={handleExampleTextChange}
        />
        <select
          name="font-size"
          id="font-size"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
          <option value="60px">60px</option>
          <option value="80px">80px</option>
        </select>
        <button onClick={handleOptionsReset}>reset</button>
      </OptionsBarContainer>
    );
  }
}

export default OptionsBar;
