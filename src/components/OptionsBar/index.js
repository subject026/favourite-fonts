import React from "react";

class OptionsBar extends React.Component {
  render() {
    const {
      searchText,
      handleSearchTextChange,
      exampleText,
      handleExampleTextChange
    } = this.props;
    return (
      <section>
        <input
          type="text"
          placeholder="Search fonts"
          value={searchText}
          onChange={handleSearchTextChange}
        />
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
