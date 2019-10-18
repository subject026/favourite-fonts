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
    fonts: []
  };

  componentDidMount = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${config.API_KEY}&sort=popularity`
      );
      const data = await res.json();
      const fonts = data.items.filter(item =>
        item.variants.includes("regular")
      );
      this.setState(state => {
        return {
          ...state,
          fonts: [...data.items.slice(800)]
        };
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { fonts } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <Helmet>
          <title>Moose</title>
          {fonts.map((font, i) => {
            console.dir(font);
            const family = font.family.replace(/ /g, "+");
            const variant = font.variants.includes("regular")
              ? ":regular"
              : font.variants.includes("300")
              ? ":300"
              : "";
            /*
              Coda Caption
              UniFrakturCook
              Molle
            */
            const url = `https://fonts.googleapis.com/css?family=${family}${variant}`;
            return <link rel="stylesheet" href={url} key={url} />;
          })}
        </Helmet>
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <button
          onClick={() => {
            console.log(document.fonts);
          }}
        >
          boom
        </button>
        <CardGrid>
          {fonts.map((font, i) => {
            // console.dir(font);
            return (
              <FontCard key={i}>
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
