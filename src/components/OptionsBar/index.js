import React from "react";

class OptionsBar extends React.Component {
  render() {
    const {
      searchText,
      handleSearchTextChange,
      exampleText,
      handleExampleTextChange,
      handleFontSizeChange
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
        <select name="font-size" id="font-size" onChange={handleFontSizeChange}>
          <option value="20">20px</option>
          <option value="24">24px</option>
          <option value="32">32px</option>
          <option value="40">40px</option>
        </select>
      </section>
    );
  }
}

export default OptionsBar;
