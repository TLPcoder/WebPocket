'use strict';
import * as types from '../actions/action-types';

export default (state = false, action) => {
    switch(action.type){
        case types.ADD_BOOKMARK:
            return action.payload;
        default:
            return state;
    }
};
