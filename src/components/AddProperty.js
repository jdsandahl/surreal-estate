import React, { useState } from "react";
import "../styles/AddProperty.css";

import PropertyForm from "../components/PropertyForm";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: 100000,
      email: "yourName@example.com",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFields({ ...fields, [changedField]: newValue });
  };

  return (
    <div className="AddProperty" data-testid="AddProperty">
      <PropertyForm
        handleAddProperty={handleAddProperty}
        handleFieldChange={handleFieldChange}
        title={fields.title}
        city={fields.city}
        type={fields.type}
        bedrooms={fields.bedrooms}
        bathrooms={fields.bathrooms}
        price={fields.price}
        email={fields.email}
      />
    </div>
  );
};

export default AddProperty;
