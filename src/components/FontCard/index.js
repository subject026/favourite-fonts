import React from "react";

import { StyledFontCard } from "../../styled-components";

class FontCard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount = () => {
    this.props.addObserverTarget(this.ref.current);
  };

  render() {
    const { family, url } = this.props;
    return (
      <StyledFontCard ref={this.ref} data-url={url}>
        <div style={{ fontFamily: family }}>{family}</div>
      </StyledFontCard>
    );
  }
}

export default FontCard;
