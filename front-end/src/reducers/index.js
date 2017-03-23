'use strict';
import people from './people-reducer.js';
import login from './loginReducer.js';
import page from './pageReducer.js';
import bookmarks from './bookmarkReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, login, page, bookmarks
});

export default rootReducer;
