import React from "react";
import "./style.scss";

export default function button({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
