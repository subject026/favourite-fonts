import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import { Theme, CardGrid } from "./styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <CardGrid>{/* Some cards here */}</CardGrid>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
