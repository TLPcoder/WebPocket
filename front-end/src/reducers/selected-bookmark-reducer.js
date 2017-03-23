"use strict";
import * as types from '../actions/action-types';

export default (state = {
    url:'http://goldwallpapers.com/uploads/posts/narnia-lion-wallpaper/narnia_lion_wallpaper_019.jpg',
    name:''
    }, action) => {
    switch(action.type){
        case types.SELECTED_BOOKMARK:
            return Object.assign({}, state, {url:action.bookmark.url, name:action.bookmark.name});
        default:
            return state;
    }
};
