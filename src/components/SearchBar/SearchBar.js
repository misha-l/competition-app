import React from "react";
import "./SearchBar.scss";
import { BiSearch } from "react-icons/bi";


const SearchBar = () => {
  return (
  <div class="searchbar">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><BiSearch /></button>
    </form>
  </div>
  );
};

export default SearchBar;


