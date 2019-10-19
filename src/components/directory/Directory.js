import React from "react";
import MenuItem from "../menu item/MenuItem";
import "./style.css";
import { connect } from "react-redux";

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
  directory: state.directoryReducer.sections
});
export default connect(mapStateToProps)(Directory);
