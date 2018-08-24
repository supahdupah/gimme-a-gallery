import React, { Component, PropTypes } from 'react';
import Item from './Item';
//import './styles.css';
import MenuItem from '../presentational/MenuItem';

class MenuContainer extends Component {
    render() {
        return (
            <div className="topnav">
                <ul id="menu">
                    {this.props.menuData.map(function (menu, index) {
                        return (
                            <Item path={menu.path} name={menu.name} key={index} singleMenuData={menu}>
                            </Item>
                        );
                    })}
                </ul>
            </div>
        );

    }
}
export default MenuContainer;