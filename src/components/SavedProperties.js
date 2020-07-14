import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";

const SavedProperties = ({ userId }) => {
  const initialState = {
    favourites: [],
    loading: false,
    alert: {
      message: "",
      isSuccess: true,
    },
  };

  const [favourites, setFavourites] = useState(initialState.favourites);
  const [loading, setLoading] = useState(initialState.loading);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userId}"}&populate=propertyListing`
      )
      .then(({ data }) => {
        setFavourites(data);
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
    <div className="saved-properties" data-testid="saved-properties">
      Saved Properties
      <div className="favouriteCard">
          {favourites.map((favourite) => (
              <FavouriteCard key={favourite._id} {...favourite} userId={userId} />
          ))}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SavedProperties;
