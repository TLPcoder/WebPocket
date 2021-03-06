'use strict';
import login from './loginReducer.js';
import page from './pageReducer.js';
import bookmarks from './bookmarkReducer.js';
import selectedBookmark from './selected-bookmark-reducer.js';
import category from './category-reducer.js';
import addBookmark from './add-bookmark-reducer.js';
import deleteBookmark from './delete-bookmark-reducer.js';
import addCategory from './add-category-reducer.js';
import currentCategory from './current-category-reducer.js';
import deleteCategory from './delete-category-reducer.js';
import noCategories from './no-categories-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  login, page, bookmarks, selectedBookmark, category, addBookmark, addCategory,currentCategory,deleteBookmark,deleteCategory,noCategories
});

export default rootReducer;
