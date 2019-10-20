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
  constructor() {
    super();
    this.state = {
      allFonts: [],
      filteredFonts: [],
      fontUrls: []
    };

    // Set up observer
    this.observer = new IntersectionObserver(
      this.handleObservation //callback
      // {
      //   root: null,
      //   rootMargin: "600px",
      //   threshold: 1
      // }
    );
  }

  async componentDidMount() {
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
  }

  addObserverTarget = target => {
    this.observer.observe(target);
  };

  handleObservation = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fontUrl = entry.target.attributes["data-url"].value;
        this.observer.unobserve(entry.target);
        this.setState(state => {
          const { fontUrls } = state;
          return {
            ...state,
            fontUrls: [...fontUrls, fontUrl]
          };
        });
      }
    });
  };

  render() {
    const { allFonts, fontUrls } = this.state;
    // console.log(fontUrls);
    return (
      <ThemeProvider theme={Theme}>
        <Helmet>
          <title>Moose</title>
          {fontUrls.map(url => {
            return <link rel="stylesheet" href={url} key={url} />;
          })}
        </Helmet>
        <GlobalStyle />
        <Header />
        <OptionsBar />
        <CardGrid>
          {allFonts.map(font => {
            const fontNotLoaded = !fontUrls.includes(font.family);
            return (
              <FontCard
                key={`${font.family}_card`}
                family={font.family}
                url={font.url}
                fontNotLoaded={fontNotLoaded}
                addObserverTarget={this.addObserverTarget}
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
