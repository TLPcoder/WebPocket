"use strict";
import * as types from '../actions/action-types';

export default (state = false, action) => {
    switch(action.type){
        case types.LOG_IN:
            return action.status;
        default:
            return state;
    }
};
