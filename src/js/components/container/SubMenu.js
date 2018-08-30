import React, { Component, PropTypes } from 'react';
import { target } from 'react-aim';
import SubMenuItem from '../presentational/SubMenuItem'
@target(
  {
    aimStart: (props, component) => {
      console.log(component);
      console.log("mouseEnter");
      component.setState({ aiming: true });
    },
    aimStop: (props, component) => {
      component.setState({ aiming: false });
    }
  }
)
class Submenu extends Component {
  constructor() {
    super();
    this.state = { highlight: null, aiming: false }
  }

  render() {
    return (
      <ul >
        {this.props.singleMenuData.subMenu.map(function (subMenu, index) {
          return (
            <SubMenuItem path={subMenu.path} name={subMenu.name} key={index}></SubMenuItem>
          );
        })}
      </ul>
    );
  }
}

export default Submenu;
