import { Component } from "react";
import "./search-box.styles.css";

/**
 * Display search box for the users to filter records
 */
class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
