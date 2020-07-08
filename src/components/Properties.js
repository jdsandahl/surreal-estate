import React, { useState, useEffect } from "react";
import PropertyListings from "./PropertyListings";
import axios from "axios";

const Properties = () => {
  const initialState = {
    listings: [],
    loading: false,
  };

  const [listings, setListings] = useState(initialState.listings);
  const [loading, setLoading] = useState(initialState.loading);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setListings(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <PropertyListings listings={listings} />
    </div>
  );
};

export default Properties;
