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
              <h4 class="title">Submenu Appear below</h4>
              <button onClick={() => i18n.changeLanguage('es')}>de</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
              <div className="App-intro">
                <MenuContainer menuData={t('menuData', { returnObjects: true })}>
                </MenuContainer>
              </div>

              <div class="container">
                <Route exact path="/" component={Home} />
                <Route path="/ilustrations" component={Ilustrations} />
                <Route path="/paintings" component={Paintings} />
                <Route path="/drawings" component={Drawings} />
              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
