import React from 'react';
import {
    Link
  } from 'react-router-dom'

const MenuItem = props => (
    <Link to={props.path}>{props.name}</Link>
    // <li style={style} key={props.index}>
        
    // </li>
)
export default MenuItem;