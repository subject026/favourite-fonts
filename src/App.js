import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { css } from "styled-components";

import getFonts from "./network/getFonts";
import Header from "./components/Header";
import OptionsBar from "./components/OptionsBar";
import FontCard from "./components/FontCard/index";
import FontLink from "./components/FontLink";
import { BackToTopButton } from "./components/Buttons/index";
import { $nav_transition, width } from "./mixins";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
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

const Overlay = styled.div`
  ${({ navIsHidden }) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgb(33, 33, 33);
    opacity: 0.48;
    transition: opacity ${$nav_transition}, visibility ${$nav_transition};
    ${navIsHidden
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : ``}
    @media (min-width: 730px) {
      display: none;
    }
  `}
`;

export const CardGrid = styled.section`
  display: grid;
  grid-gap: 30px;
  padding: 30px ${({ theme }) => theme.layout.padding};
  grid-template-columns: minmax(0, 1fr);
  ${width.from600px(css`
    padding-left: 30px;
    padding-right: 30px;
  `)}
  ${props =>
    !props.isListView
      ? css`
          @media (min-width: 600px) {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }
          @media (min-width: 1100px) {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
          }
        `
      : ``}
`;

const initialState = {
  exampleText: "Then came the night of the first fallen star.",
  searchText: "",
  fontSize: "40px",
  isListView: false
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navIsHidden: true,
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

  handleNavToggle = () => {
    this.setState(state => {
      const { navIsHidden } = state;
      return {
        navIsHidden: !navIsHidden
      };
    });
  };

  handleWindowScroll = () => {
    const { windowAtTop } = this.state;
    if (windowAtTop && window.scrollY > 100) {
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

  handleViewToggle = () => {
    this.setState(state => {
      const { isListView } = state;
      return {
        ...state,
        isListView: !isListView
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
      navIsHidden,
      windowAtTop,
      filteredFonts,
      fontUrls,
      loadedFonts,
      searchText,
      exampleText,
      fontSize,
      isListView
    } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BackToTopButton
          windowAtTop={windowAtTop}
          handleBackToTopClick={this.handleBackToTopClick}
        />
        <Overlay onClick={this.handleNavToggle} navIsHidden={navIsHidden} />
        <Header
          navIsHidden={navIsHidden}
          handleNavToggle={this.handleNavToggle}
        />
        <OptionsBar
          searchText={searchText}
          exampleText={
            exampleText === initialState.exampleText ? "" : exampleText
          }
          fontSize={fontSize}
          isListView={isListView}
          handleSearchTextChange={this.handleSearchTextChange}
          handleExampleTextChange={this.handleExampleTextChange}
          handleFontSizeChange={this.handleFontSizeChange}
          handleViewToggle={this.handleViewToggle}
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
        <CardGrid isListView={isListView}>
          {filteredFonts.map(font => {
            const fontIsLoaded = loadedFonts.includes(font.url);
            const fontIsLoading = fontIsLoaded
              ? false
              : fontUrls.includes(font.url);
            return (
              <FontCard
                key={`${font.family}_card`}
                family={font.family}
                url={font.url}
                fontIsLoading={fontIsLoading}
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
