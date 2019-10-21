import React from "react";

import { StyledFontCard } from "../../styled-components";

class FontCard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount = () => {
    const { fontLoadRequested } = this.props;
    // Only need to observe if font hasn't yet been loaded
    if (!fontLoadRequested) this.props.addObserverTarget(this.ref.current);
  };

  render() {
    const { family, url, fontIsLoaded, exampleText } = this.props;
    return (
      <StyledFontCard ref={this.ref} data-url={url} fontIsLoaded={fontIsLoaded}>
        {!fontIsLoaded && <h3>Loading...</h3>}
        {fontIsLoaded && (
          <div style={{ fontFamily: family }}>{exampleText}</div>
        )}
      </StyledFontCard>
    );
  }
}

export default FontCard;
