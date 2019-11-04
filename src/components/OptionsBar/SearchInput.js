import React from "react";
import styled from "styled-components";

import SearchIcon from "./SearchIcon";

const SearchInputContainer = styled.label`
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
`;

const Input = styled.input`
  padding: 0px 20px;
`;

const SearchInput = ({ searchText, handleSearchTextChange }) => {
  return (
    <SearchInputContainer htmlFor="search">
      <SearchIcon />
      <Input
        id="search"
        type="text"
        placeholder="Search fonts"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
