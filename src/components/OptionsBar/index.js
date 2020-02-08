import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import SearchInput from "./SearchInput";
import SampleTextInput from "./SampleTextInput";
import { ViewToggleButton, ResetButton } from "../Buttons";
import FontSizeSelect from "./FontSizeSelect";
import { width } from "../../mixins";

const OptionsBarOuter = styled.section`
  ${({ theme }) => css`
    padding: 20px ${theme.layout.padding};
    ${width.from600px(css`
      padding-left: 30px;
      padding-right: 30px;
    `)}
  `}
`;

const OptionsBarInner = styled.section`
  ${({ theme }) => css`
    height: 50px;
    border-radius: 50px;
    padding: 0px ${theme.layout.padding};
    display: grid;
    grid-gap: 1px;
    grid-template-columns: minmax(0, 1fr) 50px;
    @media (min-width: 600px) {
      grid-template-columns: minmax(0, 5fr) minmax(0, 5fr) 100px 50px 50px;
    }
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
  isListView,
  handleSearchTextChange,
  handleExampleTextChange,
  handleFontSizeChange,
  handleViewToggle,
  handleOptionsReset
}) => {
  return (
    <OptionsBarOuter>
      <OptionsBarInner>
        <SearchInput
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
        />
        <SampleTextInput
          exampleText={exampleText}
          handleExampleTextChange={handleExampleTextChange}
        />
        <FontSizeSelect
          fontSize={fontSize}
          handleFontSizeChange={handleFontSizeChange}
        />
        <ViewToggleButton
          isListView={isListView}
          handleViewToggle={handleViewToggle}
        />
        <ResetButton handleOptionsReset={handleOptionsReset} />
      </OptionsBarInner>
    </OptionsBarOuter>
  );
};

export default OptionsBar;
