import React from "react";
import PropTypes from "prop-types";

function Panel({ width, height, visible, content }) {
  return (
    <div
      className="Panel"
      style={{
        width,
        height,
        visibility: visible ? "visible" : "hidden"
      }}
    >
      {content}
    </div>
  );
}

Panel.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  visible: PropTypes.bool,
  content: PropTypes.node
};

export default Panel;
