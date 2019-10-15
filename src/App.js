import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

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
      console.log(data);
      this.setState(state => {
        return {
          ...state,
          fonts: [...data.items.slice(0, 50)]
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
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <CardGrid>
          {fonts.map((font, i) => {
            // console.dir(font);
            const family = font.family.replace(/ /g, "+");
            const url = `https://fonts.googleapis.com/css?family=${family}`;
            return (
              <FontCard key={i}>
                <link rel="stylesheet" href={url} />
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
