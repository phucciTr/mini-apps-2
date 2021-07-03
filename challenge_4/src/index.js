/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/store.js';
import initBoard from './actions/board.js';
import mine from './lib/mine.js';

import changeStatus from './actions/status.js';
import AppContainer from './containers/AppContainer.js';

// window.document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
  () => store.dispatch(initBoard(mine.init()))
);

