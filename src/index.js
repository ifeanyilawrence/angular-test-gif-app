import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/flexslider.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/animate.min.css';
import './assets/css/font-icon.css';

import './assets/js/bootstrap.min.js';
import './assets/js/jquery.fancybox.pack.js';
import './assets/js/retina.min.js';
import './assets/js/main.js';

import configureStore from './store/configureStore';
import App from './app';

const store = configureStore();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
