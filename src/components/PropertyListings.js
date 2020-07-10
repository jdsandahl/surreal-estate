import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyListings.css";

import PropertyCard from "./PropertyCard";

const PropertyListings = ({ listings }) => (
  <div className="property-listings">
    {listings.map((property) => (
      <PropertyCard key={property._id} {...property} />
    ))}
  </div>
);

PropertyListings.propTypes = {
  listings: PropTypes.array.isRequired,
};

export default PropertyListings;
