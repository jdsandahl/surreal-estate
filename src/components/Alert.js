import React from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};

export default Alert;
