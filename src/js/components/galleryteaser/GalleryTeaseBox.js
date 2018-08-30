import React, {
    Component
} from 'react';
import PropTypes from "prop-types";

import GalleryTeaseDetailsTitle from './GalleryTeaseDetailsTitle';
import GalleryTeaseDetailsCategory from './GalleryTeaseDetailsCategory';
import HyperlinkImageContainer from './HyperlinkImageContainer';
class GalleryTeaseBox extends Component {
    static = {
        imageUrl: PropTypes.string.isRequired,
        path : PropTypes.string.isRequired,
        categoryTitle : PropTypes.string.isRequired,
        titleText : PropTypes.string.isRequired
    }
    constructor() {
        super();
    }
    render(){
        return (
            <article className="col-3 gallery-tease-box">
                <div className="gallery-tease-image">
                    <HyperlinkImageContainer path={this.props.path} imageUrl={this.props.imageUrl}>
                    </HyperlinkImageContainer>
                </div>
                <div className="row">
                    <div className="gallery-tease-details col-12">
                        <GalleryTeaseDetailsCategory path={this.props.path} categoryTitle={this.props.categoryTitle}>

                        </GalleryTeaseDetailsCategory>
                        <GalleryTeaseDetailsTitle path={this.props.path} titleText={this.props.titleText}>

                        </GalleryTeaseDetailsTitle>
                        <div className="row gallery-tease-details-footer">
                            <p className="col-12">GalleryTeaseDetailsFooter</p>
                        </div>
                    </div>
                </div>       
            </article>
        )
    };
}
GalleryTeaseBox.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
    categoryTitle : PropTypes.string.isRequired,
    titleText : PropTypes.string.isRequired
};
export default GalleryTeaseBox;