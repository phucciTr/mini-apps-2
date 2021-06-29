/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import _ from 'lodash';

let boardModel = _.range(10).map((row) => {
  return _.range(10).map((col) => 'x')
});

const store = createStore(rootReducer, [], applyMiddleware(thunk));

export default store;
