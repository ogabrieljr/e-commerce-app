import React from "react";
import "./style.scss";

export default function Input({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {
        <label
          className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      }
    </div>
  );
}
