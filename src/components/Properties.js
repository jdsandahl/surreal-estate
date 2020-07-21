import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyListings from "./PropertyListings";
import Alert from "./Alert";
import SideBar from "./SideBar";
import Loading from "./Loading";
import postFavourite from "../services/postFavourite";
import "../styles/Properties.css";

import axios from "axios";

const Properties = ({ userId }) => {
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
    let mounted = true;
    setLoading(true);

    axios
      .get("https://agile-taiga-51316.herokuapp.com/api/v1/PropertyListing")
      .then(({ data }) => {
        if(mounted){
        setListings(data);
        }
      })
      .catch((err) => {
        if(mounted){
        setAlert({
          message: "Server Error: Properties not found, please try again later",
          isSuccess: false,
        });
      }
      });
    setLoading(false);

    return() => {
      mounted = false;
    }
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://agile-taiga-51316.herokuapp.com/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setListings(data);
      })
      .catch((err) => {
        setAlert({
          message: "Server Error: Properties not found, please try again later",
          isSuccess: false,
        });
      });
    setLoading(false);
  }, [search]);

  const clearAlert = () => {
    setAlert(initialState.alert);
  };

  const handleSaveProperty = async (listingId) => {
    setAlert(await postFavourite(listingId, userId));
    setTimeout(clearAlert, 3000);
  };

  return (
    <div className="properties">
      <SideBar />
      <div className="properties__main">
        <Loading loading={loading} />
        <Alert message={alert.message} success={alert.isSuccess} />
        <PropertyListings
          listings={listings}
          userId={userId}
          onSaveProperty={handleSaveProperty}
        />
      </div>
    </div>
  );
};

export default Properties;
