import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyListings.css";

import PropertyCard from "./PropertyCard";

const PropertyListings = ({ listings, userId, onSaveProperty }) => (
  <div className="property-listings">
    {listings.map((property) => (
      <PropertyCard key={property._id} {...property} userId={userId} onSaveProperty={onSaveProperty} />
    ))}
  </div>
);

PropertyListings.propTypes = {
  listings: PropTypes.array.isRequired,
  userId: PropTypes.string,
  onSaveProperty: PropTypes.func
};

export default PropertyListings;
