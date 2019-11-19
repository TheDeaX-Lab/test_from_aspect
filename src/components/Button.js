import React from "react";
import PropTypes from "prop-types";

function Button({ width, height, visible, caption }) {
  return (
    <button
      className="Button"
      style={{ width, height, visibility: visible ? "visible" : "hidden" }}
    >
      {caption}
    </button>
  );
}

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  caption: PropTypes.string,
  visible: PropTypes.bool
};

export default Button;
