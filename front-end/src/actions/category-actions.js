'use strict';
import * as types from './action-types';
export const updateCategory = (category)=>{
        console.log("fuck")
    return {
        type: types.UPDATE_CATEGORY,
        payload: category
    };
};

export const clearCategory = () => {
    return{
        type: types.CLEAR_CATEGORY,
        payload: []
    };
};

export const addCategory = (bool) =>{
    return{
        type: types.ADD_CATEGORY,
        payload:bool
    };
};

export const deleteCategory = (bool) =>{
    return{
        type: types.DELETE_CATEGORY,
        payload:bool
    };
};

export const currentCategory = (id) =>{
    return{
        type: types.CURRENT_CATEGORY,
        payload:id
    };
};
export const noCategories = (bool) =>{
    return{
        type: types.NO_CATEGORIES,
        payload:bool
    };
};
