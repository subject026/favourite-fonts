import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer";

import getFonts from "./network/getFonts";

import { Theme, CardGrid } from "./styled-components";
import FontCard from "./components/FontCard/index";
import FontLink from "./components/FontLink";

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
      fontUrls: [],
      loadedFonts: [],
      exampleText: "Then came the night of the first fallen star.",
      searchText: ""
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
      }, this.filterFonts);
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

  handleFontLoaded = url => {
    this.setState(state => {
      const { loadedFonts } = state;
      return {
        ...state,
        loadedFonts: [...loadedFonts, url]
      };
    });
  };

  handleExampleTextChange = event => {
    const { value } = event.target;
    const newValue =
      value === "" ? "Then came the night of the first fallen star." : value;
    this.setState(state => {
      return {
        ...state,
        exampleText: newValue
      };
    });
  };

  handleSearchTextChange = event => {
    const { value } = event.target;
    console.log("search text changing... new value: ", value);
    this.setState(state => {
      return {
        ...state,
        searchText: value
      };
    }, this.filterFonts);
  };

  filterFonts = () => {
    const { allFonts, searchText } = this.state;
    let filteredFonts;
    if (searchText.length < 1) {
      filteredFonts = [...allFonts];
    } else {
      const filter = new RegExp(`${searchText}`, "i");
      filteredFonts = allFonts.filter(font => filter.test(font.family));
    }
    this.setState(state => {
      return {
        ...state,
        filteredFonts: [...filteredFonts]
      };
    });
  };

  render() {
    const { filteredFonts, fontUrls, loadedFonts, exampleText } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <Helmet>
          <title>Moose</title>
        </Helmet>
        <GlobalStyle />
        <Header />
        <OptionsBar
          handleSearchTextChange={this.handleSearchTextChange}
          handleExampleTextChange={this.handleExampleTextChange}
        />
        {fontUrls.map(url => {
          return (
            <FontLink
              key={`${url}_url`}
              url={url}
              handleFontLoaded={this.handleFontLoaded}
            />
          );
        })}
        <CardGrid>
          {filteredFonts.map(font => {
            const fontLoadRequested = fontUrls.includes(font.family);
            const fontIsLoaded = loadedFonts.includes(font.url);
            return (
              <FontCard
                key={`${font.family}_card`}
                family={font.family}
                url={font.url}
                fontLoadRequested={fontLoadRequested}
                fontIsLoaded={fontIsLoaded}
                addObserverTarget={this.addObserverTarget}
                exampleText={exampleText}
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
