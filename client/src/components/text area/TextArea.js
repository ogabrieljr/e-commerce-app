import React from "react";
import "./style.scss";

export default function TextArea({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <textarea className="form-input" onChange={handleChange} {...otherProps} />
      {
        <label
          className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      }
    </div>
  );
}
