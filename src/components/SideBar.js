import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

import SearchForm from "./SearchForm";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <SearchForm
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
        query={query}
      />
      <label className="sidebar__section">
        Filter By City:
        <ul className="sidebar__links">
          <li className="sidebar__item">
            <Link to={`/`} className="sidebar__link">
              All
            </Link>
          </li>
          <li className="sidebar__item">
            <Link
              to={buildQueryString("query", { city: "Manchester" })}
              className="sidebar__link"
            >
              Manchester
            </Link>
          </li>
          <li className="sidebar__item">
            <Link
              to={buildQueryString("query", { city: "Leeds" })}
              className="sidebar__link"
            >
              Leeds
            </Link>
          </li>
          <li className="sidebar__item">
            <Link
              to={buildQueryString("query", { city: "Sheffield" })}
              className="sidebar__link"
            >
              Sheffield
            </Link>
          </li>
          <li className="sidebar__item">
            <Link
              to={buildQueryString("query", { city: "Liverpool" })}
              className="sidebar__link"
            >
              Liverpool
            </Link>
          </li>
        </ul>
      </label>
      <label className="sidebar__section">
        Sort By:
        <ul className="sidebar__links">
          <li className="sidebar__item">
            <Link
              to={buildQueryString("sort", { price: 1 })}
              className="sidebar__link"
            >
              Price - Ascending
            </Link>
          </li>
          <li className="sidebar__item">
            <Link
              to={buildQueryString("sort", { price: -1 })}
              className="sidebar__link"
            >
              Price - Descending
            </Link>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default SideBar;
