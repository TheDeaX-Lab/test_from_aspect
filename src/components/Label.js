import React from "react";
import PropTypes from "prop-types";

function Label({ caption, visible }) {
  return (
    <span
      className="Label"
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      {caption}
    </span>
  );
}

Label.propTypes = {
  caption: PropTypes.string,
  visible: PropTypes.bool
};

export default Label;
