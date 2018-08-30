import './locales/en/translations.json';
import './locales/es/translations.json';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();