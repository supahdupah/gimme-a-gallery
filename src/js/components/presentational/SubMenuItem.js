import React from 'react';
import {
    Link
  } from 'react-router-dom'

const SubMenuItem = props => (
    <li key={props.index}>
        <Link to={props.path}>{props.name}</Link>
    </li>
)
export default SubMenuItem;