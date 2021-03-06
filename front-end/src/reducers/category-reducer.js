'use strict';
import * as types from '../actions/action-types';

export default (state = [], action)=>{
    switch(action.type){
        case types.UPDATE_CATEGORY:
            return action.payload;
        case types.CLEAR_CATEGORY:
            return [];
        default:
            return state;
    }
};
