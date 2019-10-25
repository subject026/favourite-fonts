import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0 20px;
`;

const SampleTextInput = ({ exampleText, handleExampleTextChange }) => {
  return (
    <Input
      type="text"
      placeholder="Type something"
      value={exampleText}
      onChange={handleExampleTextChange}
    />
  );
};

export default SampleTextInput;
