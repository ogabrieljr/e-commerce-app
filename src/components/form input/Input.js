import React from "react";
import "./style.scss";

export default function Input({ change, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={change} {...otherProps} />
      {
        <label className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      }
    </div>
  );
}
