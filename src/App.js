import React from "react";
import styled from "styled-components";
import { ThemeProvider, css } from "styled-components";

const theme = {
  color1: "blue"
};

const Test = styled.h1`
  ${({ theme: { color1 } }) => css`
    font-size: 50px;
    color: ${color1};
  `}
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Test>Favourite Fonts?</Test>
    </div>
  </ThemeProvider>
);

export default App;
