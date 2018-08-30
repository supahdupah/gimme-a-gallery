import React from 'react';
import PropTypes from "prop-types";
import {
    Link
  } from 'react-router-dom'

const GalleryTeaseDetailsCategory = props => (
    <div className="row gallery-tease-details-categories">
        <h5 className="col-12">
            <Link to={props.path}>{props.categoryTitle}</Link>
        </h5>
    </div>   
)

GalleryTeaseDetailsCategory.propTypes = {
    path: PropTypes.string.isRequired,
    categoryTitle : PropTypes.string.isRequired
};
export default GalleryTeaseDetailsCategory;