import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 0 15px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => props.theme.colors.lightGrey};
  &:focus {
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const FontSizeSelect = ({ fontSize, handleFontSizeChange }) => {
  return (
    <Select
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
    </Select>
  );
};

export default FontSizeSelect;
