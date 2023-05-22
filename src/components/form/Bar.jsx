import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value }) => {

  const barStyles = {
    width: `${value*25}%`,
    height: "4px",
    backgroundColor: "#007bff",
    borderRadius: "50px",
  };

  return (
      <div style={barStyles}></div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
}


export default ProgressBar;