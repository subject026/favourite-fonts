import React from "react";

class OptionsBar extends React.Component {
  render() {
    const {
      searchText,
      exampleText,
      fontSize,
      handleSearchTextChange,
      handleExampleTextChange,
      handleFontSizeChange,
      handleOptionsReset
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
          <option value="60px">60px</option>
          <option value="80px">80px</option>
        </select>
        <button onClick={handleOptionsReset}>reset</button>
      </section>
    );
  }
}

export default OptionsBar;
