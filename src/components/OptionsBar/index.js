import React from "react";

class OptionsBar extends React.Component {
  render() {
    const {
      searchText,
      exampleText,
      fontSize,
      handleSearchTextChange,
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
        <select
          name="font-size"
          id="font-size"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
        </select>
      </section>
    );
  }
}

export default OptionsBar;
