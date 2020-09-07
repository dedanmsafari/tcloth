import React from "react";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySection } from "../../redux/directory/directorySelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.scss";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
