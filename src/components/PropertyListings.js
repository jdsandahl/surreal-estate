import React from "react";
import PropTypes from "prop-types";

import PropertyCard from "./PropertyCard";

const PropertyListings = ({ listings }) => (
  <div className="property-listings">
    { listings.map((property) => (
      <PropertyCard
        key={property._id}
        title={property.title}
        type={property.type}
        city={property.city}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        price={property.price}
        email={property.email}
      />
    ))}
  </div>
);

PropertyListings.propTypes = {
    listings: PropTypes.array.isRequired,
  };

export default PropertyListings;
