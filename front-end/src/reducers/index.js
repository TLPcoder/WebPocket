'use strict';
import people from './people-reducer.js';
import login from './loginReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, login
});

export default rootReducer;
