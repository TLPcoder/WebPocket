'use strict';
import people from './people-reducer.js';
import login from './loginReducer.js';
import page from './pageReducer.js';
import bookmarks from './bookmarkReducer.js';
import selectedBookmark from './selected-bookmark-reducer.js';
import category from './category-reducer.js';
import addBookmark from './add-bookmark-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, login, page, bookmarks, selectedBookmark, category, addBookmark
});

export default rootReducer;
