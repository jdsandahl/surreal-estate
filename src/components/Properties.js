import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PropertyListings from "./PropertyListings";
import Alert from "./Alert";
import SideBar from "./SideBar";
import '../styles/Properties.css';

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
      .then(({data}) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        setAlert({
          message: "Server Error: Properties not found, please try again later",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(()=> {
    setLoading(true);

    axios
    .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
    .then(({data}) => {
      setListings(data);
      setLoading(false);
    })
    .catch((err) => {
      setAlert({
        message: "Server Error: Properties not found, please try again later",
        isSuccess: false,
      });
    });
  }, [search]);
 
  return (
    <div className="properties">
      <SideBar />
      {loading && alert.isSuccess === true && (
        <div className="properties__loading">loading</div>
      )}
      <Alert message={alert.message} success={alert.isSuccess} />
      <PropertyListings listings={listings} />
    </div>
  );
};

export default Properties;
