import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Input = styled.input`
  padding: 0 20px;
  ${props =>
    props.hideOnSmallScreen
      ? css`
          @media (max-width: 600px) {
            display: none;
          }
        `
      : ``}
`;

const SampleTextInput = ({ exampleText, handleExampleTextChange }) => {
  return (
    <Input
      type="text"
      placeholder="Type something"
      value={exampleText}
      onChange={handleExampleTextChange}
      hideOnSmallScreen={true}
    />
  );
};

export default SampleTextInput;
