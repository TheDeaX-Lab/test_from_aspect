import React from "react";
import PropTypes from "prop-types";

function Input({ label, getRef, style = {} }) {
  return (
    <div style={{ ...style }}>
      <label>
        {label}
        <input
          ref={getRef}
          type="text"
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginRight: 5,
            width: "100%"
          }}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
