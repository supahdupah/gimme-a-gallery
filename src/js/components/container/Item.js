import React, { Component, PropTypes, Fragment } from 'react';
import { source } from 'react-aim';
import Submenu from './SubMenu';
import MenuItem from '../presentational/MenuItem';

@source(
  {
    mouseEnter: (props, component) => {
      console.log(component);
      console.log("mouseEnter");
      component.setState({ over: true });
    },
    mouseLeave: (props, component) => {
      component.setState({ over: false });
    }
  }
)
class Item extends Component {
  constructor() {
    super();
    this.state = { over: false };
  }

  render() {
    //const componentStyle = { ...style };
    let submenu;
    if (this.state.over) {
      //componentStyle.background = '#007eff';
      //componentStyle.color = '#fff';
      submenu = <Submenu ref="submenu" singleMenuData={this.props.singleMenuData}/>;
    }

    return (
       <li>          
          <MenuItem name={this.props.name} path={this.props.path} key={this.props.index}>
          </MenuItem>
         {/* {this.props.name}  */}
         {submenu} 
       </li>
    );
  }
}

export default Item;