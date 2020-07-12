import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ handleSearch, handleInputChange, query }) => {
  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;
