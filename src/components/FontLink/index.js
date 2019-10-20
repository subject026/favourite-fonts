import React from "react";

class FontLink extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    this.ref.current.addEventListener("load", ({ target }) => {
      this.props.handleFontLoaded(target.attributes.href.value);
    });
  };

  render() {
    const { url } = this.props;
    return <link rel="stylesheet" href={url} key={url} ref={this.ref} />;
  }
}

export default FontLink;
