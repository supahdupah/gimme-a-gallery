import React from 'react';
import {
    Link
} from 'react-router-dom'

const NavigationBox = props => (
    <div className="gallery-navigation-container row">
        <div className="inner-wrapper">
            <article className="col-3 gallery-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div>
                    <h3>PAISATGES</h3>
                </div>
            </article>
            <article className="col-3 gallery-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div className="h3-box">
                    <h3>ABSTRACTIONS</h3>
                </div>
            </article>
            <article className="col-3 gallery-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div>
                    <h3>ABSTRACTIONS</h3>
                </div>
            </article>
            <article className="col-3 gallery-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
            </article>
        </div>
    </div>
)
export default NavigationBox;
{/* <Link to={props.path}>{props.name}</Link> */ }