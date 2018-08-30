import React from 'react';
import PropTypes from "prop-types";
import GalleryTeaseBox from '../galleryteaser/GalleryTeaseBox';
import { I18n, Trans } from 'react-i18next';
const GalleryTeaseContainer = props => (
    <I18n ns="translations">
    {
      (t, { i18n }) => (
        <div className="gallery-navigation-container row">
        <div className="inner-wrapper">
                {t('galleryTeaseData', { returnObjects: true }).map(function (menu, index) {
                    console.log(menu);
                            return ( 
                                <GalleryTeaseBox path={menu.path} imageUrl={menu.imageUrl} titleText={menu.titleText} categoryTitle={menu.categoryTitle}>
                                </GalleryTeaseBox>
                             );
                 })}

            <article className="col-3 gallery-tease-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div className="row">
                    <div className="gallery-tease-details col-12">
                        <div className="row gallery-tease-details-categories">
                            <h5 className="col-12">
                                <a href="">PAISATGES</a>
                            </h5>
                        </div>
                        <div className="row gallery-tease-details-title">
                            <h3 className="col-12">
                                <a href="">
                                a lot of title text everywhere there and there somewhere around the globe where
                                </a>
                            </h3>
                        </div>
                        <div className="row gallery-tease-details-footer">
                            <p className="col-12">timestamp</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="col-3 gallery-tease-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div className="row">
                    <div className="gallery-tease-details col-12">
                        <div className="row gallery-tease-details-categories">
                            <h5 className="col-12">
                                <a href="">PAISATGES</a>
                            </h5>
                        </div>
                        <div className="row gallery-tease-details-title">
                            <h3 className="col-12">
                                <a href="">
                                a lot of title text everywhere there and there somewhere around the globe where
                                </a>
                            </h3>
                        </div>
                        <div className="row gallery-tease-details-footer">
                            <p className="col-12">timestamp</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="col-3 gallery-tease-box">
                <div className="gallery-tease-image">
                    <a className="nav-box-image" href=""></a>
                </div>
                <div className="row">
                    <div className="gallery-tease-details col-12">
                        <div className="row gallery-tease-details-categories">
                            <h5 className="col-12">
                                <a href="">PAISATGES</a>
                            </h5>
                        </div>
                        <div className="row gallery-tease-details-title">
                            <h3 className="col-12">
                                <a href="">
                                a lot of title text everywhere there and there somewhere around the globe where
                                </a>
                            </h3>
                        </div>
                        <div className="row gallery-tease-details-footer">
                            <p className="col-12">timestamp</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
      )
    }
  </I18n>
)
export default GalleryTeaseContainer;