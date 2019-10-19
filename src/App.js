import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import { Theme, CardGrid, FontCard } from "./styled-components";

import config from "./config";

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
    try {
      const res = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${config.API_KEY}&sort=popularity`
      );
      const data = await res.json();
      const allFonts = data.items.map(font => {
        const { family } = font;
        const urlFamily = family.replace(/ /g, "+");
        const variant = font.variants.includes("regular")
          ? ":regular"
          : font.variants.includes("300")
          ? ":300"
          : "";
        /*
          Above doesn't cover these fonts:

            - Coda Caption
            - UniFrakturCook
            - Molle
        */
        const url = `https://fonts.googleapis.com/css?family=${urlFamily}${variant}`;
        return {
          family,
          url
        };
      });
      this.setState(state => {
        return {
          ...state,
          allFonts
        };
      });
    } catch (err) {
      console.error(err);
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
