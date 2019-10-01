import React from "react";
import { withRouter } from "react-router-dom";
import "./style.scss";

export default withRouter(function MenuItem({ title, imageUrl, match, history, link }) {
  return (
    <div className="menu-item" onClick={() => history.push(`${match.url}${link}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
});
