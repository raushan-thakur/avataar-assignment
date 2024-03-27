import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🔍Search Something"
        value={query}
        onChange={handleChange}
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;
