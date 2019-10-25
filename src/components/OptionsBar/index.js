import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import SearchIcon from "./SearchIcon";
import ResetButton from "./ResetButton";
import FontSizeSelect from "./FontSizeSelect";

const OptionsBarOuter = styled.section`
  ${({ theme }) => css`
    padding: 20px ${theme.layout.padding};
  `}
`;

const OptionsBarInner = styled.section`
  ${({ theme }) => css`
    height: 50px;
    border-radius: 50px;
    padding: 0px ${theme.layout.padding};
    display: grid;
    grid-template-columns: 300px minmax(0, 5fr) 100px 50px;
    border: 1px solid ${theme.colors.lightestGrey};
    input {
      border: none;
    }
  `}
`;

const SearchBlock = styled.label`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

export const OptionsBar = ({
  searchText,
  exampleText,
  fontSize,
  handleSearchTextChange,
  handleExampleTextChange,
  handleFontSizeChange,
  handleOptionsReset
}) => {
  return (
    <OptionsBarOuter>
      <OptionsBarInner>
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
        <FontSizeSelect value={fontSize} onChange={handleFontSizeChange} />
        <ResetButton onClick={handleOptionsReset} />
      </OptionsBarInner>
    </OptionsBarOuter>
  );
};

export default OptionsBar;
