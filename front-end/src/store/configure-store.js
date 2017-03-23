'use strict';
import rootReducer from '../reducers';
import {createStore,applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

const middleWare = applyMiddleware(promise());

export default (initialState) => {
  return createStore(rootReducer, middleWare);
};
