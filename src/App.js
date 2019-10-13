import React from "react";
import styled from "styled-components";
import { ThemeProvider, css } from "styled-components";

import Header from "./Header";
import OptionsBar from "./OptionsBar";
import CardGrid from "./CardGrid";
import Footer from "./Footer";

const theme = {
  color1: "blue"
};

// const Example = styled.h1`
//   ${({ theme: { color1 } }) => css`
//     font-size: 50px;
//     color: ${color1};
//   `}
// `;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <OptionsBar />
        <CardGrid />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
