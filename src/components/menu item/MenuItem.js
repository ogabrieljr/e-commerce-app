import React from "react";
import { withRouter } from "react-router-dom";
import "./style.scss";

function MenuItem({ title, imageUrl, match, history }) {
  return (
    <div className="menu-item" onClick={() => history.push(`${match.url}shop/${title}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
