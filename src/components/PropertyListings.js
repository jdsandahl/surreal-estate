import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyListings.css";

import PropertyCard from "./PropertyCard";

const PropertyListings = ({ listings, userId }) => (
  <div className="property-listings">
    {listings.map((property) => (
      <PropertyCard key={property._id} {...property} userId={userId} />
    ))}
  </div>
);

PropertyListings.propTypes = {
  listings: PropTypes.array.isRequired,
};

export default PropertyListings;
