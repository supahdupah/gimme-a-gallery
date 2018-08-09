import React, { Component } from 'react'; 
import { I18n, Trans } from 'react-i18next';
// import Menu from './Header/Menu';
// import Drawings from './Gallery/Drawings';
// import Ilustrations from './Gallery/Ilustrations';
// import Paintings from './Gallery/Paintings';
// import Home from './Gallery/Home';
// import MenuAim from './Header/MenuAim';
import {
  Route,
  Link
} from 'react-router-dom'
import Menu from './js/components/menu/Menu';


class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              {/* <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{t('title')}</h2>

              </div> */}
              <div className="App-intro">

                <Trans i18nKey="description.part1">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
                <Menu>
                </Menu>
              </div>
              <div>{t('description.part2')}</div>

              <div class="demo" id="demo3">
              
                <h4 class="title">Submenu Appear below</h4>
                  <button onClick={() => i18n.changeLanguage('es')}>de</button>
                  <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <div class="demo-container">
                  {/* <Menu menuData={t('menuData', { returnObjects: true })} submenuDirection="below" /> */}
                </div>
              </div>
              {/* <div class="container">
                <Route exact path="/" component={Home} />
                <Route path="/ilustrations" component={Ilustrations} />
                <Route path="/paintings" component={Paintings} />
                <Route path="/drawings" component={Drawings} />
              </div> */}
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
