import React from "react";

class OptionsBar extends React.Component {
  render() {
    const { exampleText, handleExampleTextChange } = this.props;
    return (
      <section>
        <p>Options Bar</p>
        <input
          type="text"
          placeholder="Type something"
          value={exampleText}
          onChange={handleExampleTextChange}
        />
      </section>
    );
  }
}

export default OptionsBar;
