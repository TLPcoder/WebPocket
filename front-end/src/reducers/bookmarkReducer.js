"use strict";
import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch(action.type){
        case types.BOOKMARK_DATA:
            return action.payload;
        default:
            return state;
    }
};
