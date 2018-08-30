import React, { Component} from 'react';
import PropTypes from "prop-types";
import HyperlinkImageItem from './HyperlinkImageItem';

class HyperlinkImageContainer extends Component{
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        path : PropTypes.string.isRequired
    };
    constructor(props){
        super(props);
        document.title = "About Us";
      }

      render() {
        const aBackgroundImageStyle = {
            backgroundImage : 'url('+this.props.imageUrl+')'
        };

        return (
            <HyperlinkImageItem aBackgroundImageStyle={aBackgroundImageStyle} path={this.props.path} >
            </HyperlinkImageItem>
        );
      }
}
HyperlinkImageContainer.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    path : PropTypes.string.isRequired
};

export default HyperlinkImageContainer;
