import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// import 'react-app-polyfill/ie11'; // For IE 11 support
// import 'react-app-polyfill/stable';
import RootStore from './stores';

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
