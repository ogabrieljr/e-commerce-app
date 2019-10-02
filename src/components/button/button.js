import React from "react";
import "./style.scss";

export default function button({ children, signedIn, ...props }) {
  return (
    <button className={`${signedIn ? "google-signed-in" : ""} custom-button`} {...props}>
      {children}
    </button>
  );
}
