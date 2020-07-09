import React from "react";

const PropertyForm = ({
  handleAddProperty,
  handleFieldChange,
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
}) => {
  return (
    <form
      onSubmit={handleAddProperty}
      className="add-property-form"
      data-testid="property-form"
    >
      <label className="form-label">
        Title:
        <input
          id="title"
          name="title"
          className="form-input"
          value={title}
          onChange={handleFieldChange}
        />
      </label>
      <label className="form-label">
        City:
        <select
          id="city"
          name="city"
          className="form-input"
          value={city}
          onChange={handleFieldChange}
        >
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>
        </select>
      </label>
      <label className="form-label">
        Type:
        <select
          id="type"
          name="type"
          className="form-input"
          value={type}
          onChange={handleFieldChange}
        >
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bungalow</option>
        </select>
      </label>
      <label className="form-label">
        Bedrooms:
        <select
          id="bedrooms"
          name="bedrooms"
          className="form-input"
          value={bedrooms}
          onChange={handleFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <label className="form-label">
        Bathrooms:
        <select
          id="bathrooms"
          name="bathrooms"
          className="form-input"
          value={bathrooms}
          onChange={handleFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <label className="form-label">
        Price (£):
        <input
          id="price"
          name="price"
          className="form-input"
          type="number"
          min="0"
          step="5000"
          value={price}
          onChange={handleFieldChange}
        />
      </label>
      <label className="form-label">
        Email:
        <input
          id="email"
          name="email"
          className="form-input"
          type="email"
          value={email}
          onChange={handleFieldChange}
        />
      </label>
      <button type="submit" className="add-property-button">
        Add
      </button>
    </form>
  );
};

export default PropertyForm;
