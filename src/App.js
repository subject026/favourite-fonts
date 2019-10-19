import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import getFonts from "./network/getFonts";

import { Theme, CardGrid } from "./styled-components";
import FontCard from "./components/FontCard/index";

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
    // !!! do something to handle this
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

  handleCardInView = fontUrl => {
    console.log(fontUrl);
    // console.log(fontUrl, "includes? ", this.state.fontUrls.includes(fontUrl));
    console.log("boom");
    // this.setState(state => {
    //   const { fontUrls } = state;
    //   return {
    //     ...state,
    //     fontUrls: [...fontUrls, fontUrl]
    //   };
    // });
  };

  render() {
    const { allFonts, fontUrls } = this.state;
    // console.log(fontUrls);
    return (
      <ThemeProvider theme={Theme}>
        <Helmet>
          <title>Moose</title>
          {/* {fontUrls.map(url => {
            return <link rel="stylesheet" href={url} key={url} />;
          })} */}
        </Helmet>
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <CardGrid>
          {allFonts.map(font => {
            const fontNotLoaded = !fontUrls.includes(font.family);
            return (
              <FontCard
                family={font.family}
                url={font.url}
                fontNotLoaded={fontNotLoaded}
                handleCardInView={this.handleCardInView}
              />
            );
          })}
        </CardGrid>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
