"use strict";
import * as types from '../actions/action-types';
export default (state = 'login', action) => {
    switch(action.type){
        case types.CHAGNE_PAGE:
            return action.page;
        default:
            return state;
    }
};
