import React from "react";
import PropTypes from "prop-types";
import "../styles/Loading.css";

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="loading">
      <div className="indeterminate" />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
