import React from "react";
import MenuItem from "../menu item/MenuItem";
import "./style.css";
import { connect } from "react-redux";
import { geSections } from "../../redux/directory/directorySelectors";

function Directory({ directory }) {
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  directory: geSections(state)
});

export default connect(mapStateToProps)(Directory);
