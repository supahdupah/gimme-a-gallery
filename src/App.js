import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import Drawings from './js/Gallery/Drawings';
import Ilustrations from './js/Gallery/Ilustrations';
import Paintings from './js/Gallery/Paintings';
import Home from './js/Gallery/Home';
import {
  Route,
  Link
} from 'react-router-dom'
import MenuContainer from './js/components/container/MenuContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              <div className="header">
                ALICIA MARCANS
                  <div className="lang-switcher">
                    <div className="lang" onClick={() => i18n.changeLanguage('es')}>ES</div>
                    <div className="divider"></div>
                    <div className="lang" onClick={() => i18n.changeLanguage('en')}>EN</div>
                  </div>
              </div>

              <div>
                <MenuContainer menuData={t('menuData', { returnObjects: true })}>
                </MenuContainer>

                <div class="col-12 container">
                  <Route exact path="/" component={Home} />
                  <Route path="/ilustrations" component={Ilustrations} />
                  <Route path="/paintings" component={Paintings} />
                  <Route path="/drawings" component={Drawings} />
                </div>
              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
