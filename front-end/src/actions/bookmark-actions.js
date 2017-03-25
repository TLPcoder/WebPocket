'use strict';
import * as types from './action-types';
import axios from 'axios';
export const bookmarks = (data) => {
    return {
        type: types.BOOKMARK_DATA,
        payload: data
    };
};
export const selectBookmark = (bookmark) => {
    return {
        type: types.SELECTED_BOOKMARK,
        bookmark: bookmark
    };
};

export const clearBookmarks = () => {
    return{
        type: types.CLEAR_BOOKMARKS,
        payload: []
    };
};

export const addBookmark = (bool) => {
    return{
        type: types.ADD_BOOKMARK,
        payload: bool
    };
};
export const deleteBookmark = (bool) => {
    return{
        type: types.DELETE_BOOKMARK,
        payload: bool
    };
};
