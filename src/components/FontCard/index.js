import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Ellipsis } from "react-awesome-spinners";

import { AddButton } from "../Buttons";

const FontCardContainer = styled.div`
  ${({ theme }) => {
    return css`
      min-height: 250px;
      border-top: 1px solid ${({ theme }) => theme.colors.lighterGrey};
    `;
  }}
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontCardHeader = styled.div`
  font-size: 1rem;
  padding: 10px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const Sampletext = styled.span`
  display: inline-block;
  width: 100%;
  overflow-wrap: break-word;
  line-height: 1.2;
`;

class FontCard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.initialExampleText = props.exampleText;
  }
  componentDidMount = () => {
    const { fontIsLoading } = this.props;
    // Only need to observe if font hasn't yet been loaded
    if (!fontIsLoading) this.props.addObserverTarget(this.ref.current);
  };

  componentDidUpdate = () => {
    this.initialExampleText = this.props.exampleText;
  };

  handleIndividualSampleBlur = event => {
    if (event.target.innerHTML === "")
      event.target.innerHTML = this.initialExampleText;
  };

  render() {
    const {
      family,
      url,
      fontIsLoading,
      fontIsLoaded,
      exampleText,
      fontSize
    } = this.props;
    return (
      <FontCardContainer ref={this.ref} data-url={url}>
        <FontCardHeader>
          {family}
          <AddButton />
        </FontCardHeader>
        {fontIsLoading && (
          <SpinnerContainer>
            <Ellipsis color="lightgrey" />
          </SpinnerContainer>
        )}
        {fontIsLoaded && (
          <Sampletext
            contentEditable={true}
            onBlur={this.handleIndividualSampleBlur}
            style={{ fontFamily: family, fontSize }}
          >
            {exampleText}
          </Sampletext>
        )}
      </FontCardContainer>
    );
  }
}

export default FontCard;
