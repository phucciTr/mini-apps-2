/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store.js';
import initBoard from './actions/board.js';
import _ from 'lodash';


const boardModel = _.range(10).map((row) =>
   _.range(10).map((col) => 'x'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  () => store.dispatch(initBoard(boardModel))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
