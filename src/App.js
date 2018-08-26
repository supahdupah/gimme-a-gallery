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
                ALICIA MARSANS
                <div className="socialmedia">
                  <a href="https://www.instagram.com/alicia_marsans/"><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-facebook"></i></a>           
                </div>
                <div className="lang-switcher">
                  <div className="lang" onClick={() => i18n.changeLanguage('es')}>ES</div>
                  <div className="divider"></div>
                  <div className="lang" onClick={() => i18n.changeLanguage('en')}>EN</div>
                  <div className="divider"></div>
                  <div className="lang" onClick={() => i18n.changeLanguage('en')}>CAT</div>
                </div>
              </div>

                <MenuContainer menuData={t('menuData', { returnObjects: true })}>
                </MenuContainer>

              <div class="container">
                  <Route exact path="/" component={Paintings} />
                  <Route path="/ilustrations" component={Ilustrations} />
                  <Route path="/paintings" component={Paintings} />
                  <Route path="/drawings" component={Drawings} />
                </div>
              <footer class="footer">

              </footer>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
