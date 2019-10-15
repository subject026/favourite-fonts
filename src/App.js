import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import { Theme, CardGrid } from "./styled-components";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Header />
        <OptionsBar />
        <CardGrid>{/* Some cards here */}</CardGrid>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
