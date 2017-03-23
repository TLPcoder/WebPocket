'use strict';
import * as types from '../actions/action-types';

export default (state = [], action)=>{
    switch(action.type){
        case types.CHANGE_CATEGORY:
            return action.payload;
        case types.CLEAR_BOOKMARKS:
            return [];
        default:
            return state;
    }
};
