import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";
import Alert from "./Alert";
import deleteFavourite from "../services/deleteFavourite";
import "../styles/SavedProperties.css";

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
      })
      .catch((err) => {
        setAlert({
          message: "Server Error: Properties not found, please try again later",
          isSuccess: false,
        });
      });
    setLoading(false);
  }, [userId, favourites]);

  const clearAlert = () => {
    setAlert(initialState.alert);
  };

  const handleRemoveFavourite = async (favouriteId) => {
    console.log(favouriteId);
    setAlert(await deleteFavourite(favouriteId));
    setTimeout(clearAlert, 3000);
  };

  return (
    <div className="saved-properties" data-testid="saved-properties">
      {loading && alert.isSuccess === true && (
        <div className="favourites__loading">loading</div>
      )}
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="favourites-list">
        {favourites.map((favourite) => (
          <FavouriteCard
            key={favourite._id}
            {...favourite}
            onRemoveFavourite={handleRemoveFavourite}
          />
        ))}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SavedProperties;
