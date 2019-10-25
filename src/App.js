import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";

import getFonts from "./network/getFonts";

import FontCard from "./components/FontCard/index";
import FontLink from "./components/FontLink";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Theme = {
  layout: {
    padding: "15px"
  },
  colors: {
    lightestGrey: "rgba(0,0,0, 0.14)",
    lighterGrey: "rgba(0,0,0, 0.3)",
    lightGrey: "rgba(0,0,0, 0.6)",
    medGrey: "#3c4043",
    darkGrey: "rgba(0,0,0, 0.87)",
    lightRed: "rgba(255, 82, 82, 0.8)",
    red: "rgba(255, 82, 82, 1)"
  }
};

export const CardGrid = styled.section`
  display: grid;
  grid-gap: 30px;
  padding: 30px ${({ theme }) => theme.layout.padding};
  grid-template-columns: minmax(0, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
`;

const BackToTopButton = styled.button`
  padding: 30px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${props => (props.windowAtTop ? "none" : "inline")};
`;

const initialState = {
  exampleText: "Then came the night of the first fallen star.",
  searchText: "",
  fontSize: "40px"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      windowAtTop: true,
      allFonts: [],
      filteredFonts: [],
      fontUrls: [],
      loadedFonts: [],
      ...initialState
    };

    this.observer = new IntersectionObserver(this.handleObservation, {
      rootMargin: "600px"
    });
  }

  handleWindowScroll = () => {
    const { windowAtTop } = this.state;
    if (windowAtTop && window.scrollY > 50) {
      this.setState(state => {
        return {
          ...state,
          windowAtTop: false
        };
      });
    }
    if (!windowAtTop && window.scrollY < 50) {
      this.setState(state => {
        return {
          ...state,
          windowAtTop: true
        };
      });
    }
  };

  async componentDidMount() {
    window.onscroll = this.handleWindowScroll;

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
    this.setState(state => {
      return {
        ...state,
        searchText: value
      };
    }, this.filterFonts);
  };

  handleFontSizeChange = event => {
    const { value } = event.target;
    this.setState(state => {
      return {
        ...state,
        fontSize: value
      };
    });
  };

  handleOptionsReset = () => {
    this.setState(state => {
      return {
        ...state,
        ...initialState
      };
    }, this.filterFonts);
  };

  handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const {
      windowAtTop,
      filteredFonts,
      fontUrls,
      loadedFonts,
      searchText,
      exampleText,
      fontSize
    } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BackToTopButton
          windowAtTop={windowAtTop}
          onClick={this.handleBackToTopClick}
        >
          back to top
        </BackToTopButton>
        <Header />
        <OptionsBar
          searchText={searchText}
          exampleText={
            exampleText === initialState.exampleText ? "" : exampleText
          }
          fontSize={fontSize}
          handleSearchTextChange={this.handleSearchTextChange}
          handleExampleTextChange={this.handleExampleTextChange}
          handleFontSizeChange={this.handleFontSizeChange}
          handleOptionsReset={this.handleOptionsReset}
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
            const fontLoadRequested = fontUrls.includes(font.url);
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
                fontSize={fontSize}
              />
            );
          })}
        </CardGrid>
      </ThemeProvider>
    );
  }
}

export default App;
