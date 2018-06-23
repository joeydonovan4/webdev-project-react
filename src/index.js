import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store/index';
import App from './App/App';
import './App/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
