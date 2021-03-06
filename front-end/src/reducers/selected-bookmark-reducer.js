"use strict";
import * as types from '../actions/action-types';

export default (state = {
    url:'',
    name:''
    }, action) => {
    switch(action.type){
        case types.SELECTED_BOOKMARK:
            return Object.assign({}, state, {url:action.bookmark.url, name:action.bookmark.name});
        default:
            return state;
    }
};
