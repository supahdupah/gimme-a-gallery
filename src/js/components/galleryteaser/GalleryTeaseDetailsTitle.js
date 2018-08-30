import React from 'react';
import PropTypes from "prop-types";
import {
    Link
  } from 'react-router-dom'

  const GalleryTeaseDetailsTitle = props => (
    <div className="row gallery-tease-details-title">
        <h3 className="col-12">
            <Link to={props.path}>{props.titleText}}</Link>
        </h3>
    </div> 
)

GalleryTeaseDetailsTitle.propTypes = {
    path: PropTypes.string.isRequired,
    titleText : PropTypes.string.isRequired
};
export default GalleryTeaseDetailsTitle;