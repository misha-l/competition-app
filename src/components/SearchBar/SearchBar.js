import React from "react";
import "./SearchBar.scss";
import { BiSearch } from "react-icons/bi";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search.."
            name="search"
          />
          <button type="submit">
            <BiSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
