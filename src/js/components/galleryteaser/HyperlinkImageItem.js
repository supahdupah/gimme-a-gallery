import React from 'react';
import PropTypes from "prop-types";
import {
    Link
  } from 'react-router-dom'
  
const HyperlinkImageItem = props => (
    <Link to={props.path} className="nav-box-image" style={props.aBackgroundImageStyle}></Link>
);

HyperlinkImageItem.propTypes = {
    path: PropTypes.string.isRequired,
    aBackgroundImageStyle : PropTypes.object.isRequired
};
export default HyperlinkImageItem;