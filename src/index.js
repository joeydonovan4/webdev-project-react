import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './index.css';
import { store } from './store/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
