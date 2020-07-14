import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/real-estate-logo.png";

const PropertyCard = ({
  _id,
  title,
  type,
  city,
  bedrooms,
  bathrooms,
  price,
  email,
  userId,
  onSaveProperty,
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
      <FontAwesomeIcon icon={faEnvelope} /> Email
    </button>
    {userId && (
      <button
        className="property-card__save"
        href="#"
        onClick={() => onSaveProperty(_id)}
      >
        <FontAwesomeIcon icon={faStar} /> Save
      </button>
    )}
  </div>
);

PropertyCard.propTypes = {
  listings: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    userId: PropTypes.string,
    onSaveProperty: PropTypes.func
  }),
};

export default PropertyCard;
