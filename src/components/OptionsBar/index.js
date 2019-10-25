import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import SearchInput from "./SearchInput";
import SampleTextInput from "./SampleTextInput";
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
        <SearchInput
          value={searchText}
          handleSearchTextChange={handleSearchTextChange}
        />
        <SampleTextInput
          value={exampleText}
          handleExampleTextChange={handleExampleTextChange}
        />
        <FontSizeSelect
          value={fontSize}
          handleFontSizeChange={handleFontSizeChange}
        />
        <ResetButton handleOptionsReset={handleOptionsReset} />
      </OptionsBarInner>
    </OptionsBarOuter>
  );
};

export default OptionsBar;
