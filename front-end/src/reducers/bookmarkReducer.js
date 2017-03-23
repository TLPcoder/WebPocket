"use strict";
import * as types from '../actions/action-types';

export default (state = [], action) => {
    var arr = [];
    for(var key in action.data){
        arr.push(action.data[key]);
    }
    console.log("alksjflkdjf", arr);
    switch(action.type){
        case types.BOOKMARK_DATA:
            return arr;
        default:
            return state;
    }
};
