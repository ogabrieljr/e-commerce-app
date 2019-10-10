import React from "react";
import "./style.scss";

export default function button({ children, inverted, signedIn, ...props }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} 
      ${signedIn ? "google-signed-in" : ""} custom-button`}
      {...props}>
      {children}
    </button>
  );
}
