'use strict';
import * as types from './action-types';
export const changeCategory = (category)=>{
    return {
        type: types.CHANGE_CATEGORY,
        payload: category
    };
};
