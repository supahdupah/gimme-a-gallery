import React, { Component, PropTypes } from 'react';
import { target } from 'react-aim';
import SubMenuItem from '../presentational/SubMenuItem'

const style = {
  position: 'absolute',
  top: '0px',
  left: '100%',
  background: '#eee',
  margin: '0px',
  padding: '0px',
  listStyle: 'none',
  border: '1px solid #bbb',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, .2)'
};

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
