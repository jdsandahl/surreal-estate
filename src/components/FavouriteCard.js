import React from "react";
import "../styles/FavouriteCard.css";

const FavouriteCard = ({ propertyListing: { title }, userId }) => {
  return (
    <div className="favourite-card">
      <div className="favourite-card__detail">{title}</div>
      <button className="favourite-card__btn --email">Email</button>
      <button className="favourite-card__btn --remove">Remove</button>
    </div>
  );
};

export default FavouriteCard;
