import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faPoundSign } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/real-estate-logo.png";

const PropertyCard = ({
  title,
  type,
  city,
  bedrooms,
  bathrooms,
  price,
  email,
}) => (
  <div className="property-card">
    <div className="property-card__logo">
      <img className="logo" src={Logo} alt="logo" />
    </div>
    <div className="property-card__title" data-testid="title">
      {title}
    </div>
    <div className="property-card__type" data-testid="type">
      {type} - {city}
    </div>
    <div className="property-card__bedrooms" data-testid="bedrooms">
      <FontAwesomeIcon icon={faBed} /> {bedrooms}
    </div>
    <div className="property-card__bathrooms" data-testid="bathrooms">
      <FontAwesomeIcon icon={faBath} /> {bathrooms}
    </div>
    <div className="property-card__price" data-testid="price">
      <FontAwesomeIcon icon={faPoundSign} /> {price}
    </div>
    <button className="property-card__email" href={`mailto:${email}`}>
      Email
    </button>
  </div>
);

PropertyCard.propTypes = {
  listings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default PropertyCard;