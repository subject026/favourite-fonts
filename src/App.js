import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import getFonts from "./network/getFonts";

import { Theme, CardGrid, FontCard } from "./styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

class App extends React.Component {
  state = {
    allFonts: [],
    filteredFonts: [],
    fontUrls: []
  };

  componentDidMount = async () => {
    const allFonts = await getFonts();
    // if API call fails this will return undefined
    if (allFonts) {
      this.setState(state => {
        return {
          ...state,
          allFonts
        };
      });
    }
  };

  render() {
    const { allFonts } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <Helmet>
          <title>Moose</title>
          {/* {test.map(font => {
            return <link rel="stylesheet" href={font.url} key={font.url} />;
          })} */}
        </Helmet>
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <CardGrid>
          {allFonts.map(font => {
            return (
              <FontCard key={`${font.family}_card`}>
                <div style={{ fontFamily: font.family }}>{font.family}</div>
              </FontCard>
            );
          })}
        </CardGrid>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
