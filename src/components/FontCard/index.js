import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const FontCardContainer = styled.div`
  ${({ theme }) => {
    return css`
      min-height: 250px;
      border-top: 1px solid ${({ theme }) => theme.colors.lighterGrey};
      .font-family {
        height: 50px;
        font-size: 1rem;
      }
      .font-sample {
        display: inline-block;
        width: 100%;
        overflow-wrap: break-word;
        line-height: 1.2;
      }
    `;
  }}
`;

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
    const { family, url, fontIsLoaded, exampleText, fontSize } = this.props;
    return (
      <FontCardContainer
        ref={this.ref}
        data-url={url}
        fontIsLoaded={fontIsLoaded}
      >
        <div className="font-family">{family}</div>
        {!fontIsLoaded && <h3>Loading...</h3>}
        {fontIsLoaded && (
          <span
            className="font-sample"
            style={{ fontFamily: family, fontSize }}
          >
            {exampleText}
          </span>
        )}
      </FontCardContainer>
    );
  }
}

export default FontCard;
