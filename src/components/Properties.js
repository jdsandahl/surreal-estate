import React, { useState, useEffect } from "react";
import PropertyListings from "./PropertyListings";
import Alert from "./Alert";

import axios from "axios";

const Properties = () => {
  const initialState = {
    listings: [],
    loading: false,
    alert: {
      message: "",
      isSuccess: true,
    },
  };

  const [listings, setListings] = useState(initialState.listings);
  const [loading, setLoading] = useState(initialState.loading);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setListings(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setAlert({
          message: "Server Error: Properties not found, please try again later",
          isSuccess: false,
        });
      });
  }, []);
 
  return (
    <div>
      {loading && alert.isSuccess === true && (
        <div>loading</div>
      )}
      <Alert message={alert.message} success={alert.isSuccess} />
      <PropertyListings listings={listings} />
    </div>
  );
};

export default Properties;
