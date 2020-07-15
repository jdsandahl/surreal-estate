import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
        <div className="form-select">
        <select
          id="city"
          name="city"
          className="form-options"
          value={city}
          onChange={handleFieldChange}
        >
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>          
        </select>
        <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </label>
      <label className="form-label">
        Type:
        <div className="form-select">
        <select
          id="type"
          name="type"
          className="form-options"
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
        <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </label>
      <label className="form-label">
        Bedrooms:
        <div className="form-select">
        <select
          id="bedrooms"
          name="bedrooms"
          className="form-options"
          value={bedrooms}
          onChange={handleFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </label>
      <label className="form-label">
        Bathrooms:
        <div className="form-select">
        <select
          id="bathrooms"
          name="bathrooms"
          className="form-options"
          value={bathrooms}
          onChange={handleFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </label>
      <label className="form-label">
        Price (£):
        <input
          id="price"
          name="price"
          className="form-input"
          type="number"
          min="0"
          step="1"
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

PropertyForm.propTypes = {
  handleAddProperty: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
}

export default PropertyForm;
