import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyListings = () => (
  <div>
    <PropertyCard
      title="Property for rent"
      type="Flat"
      city="Manchester"
      bedrooms="2"
      bathrooms="2"
      price="100000"
      email="test@test.com"
    />
  </div>
);

export default PropertyListings;
