import React from 'react';
import './config/StatusBarConfig';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';
import Player from './components/Player';
import Routes from './routes';

// const Root = () => (
//   <Provider store={store}>
//     <Routes />
//     <Player />
//   </Provider>
// );

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
