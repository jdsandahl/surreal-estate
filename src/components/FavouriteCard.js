import React from "react";
import "../styles/FavouriteCard.css";

const FavouriteCard = ({
  _id,
  propertyListing: { title, email },
  onRemoveFavourite,
}) => {
  return (
    <div className="favourite-card">
      <div className="favourite-card__detail">{title}</div>
      <button className="favourite-card__btn favourite-card__btn--email">
        <a className="favourite-card__mailto" href={`mailto:${email}`}>
          Email
        </a>
      </button>
      <button
        className="favourite-card__btn favourite-card__btn--remove"
        href="#"
        onClick={() => onRemoveFavourite(_id)}
      >
        Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
