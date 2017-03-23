"use strict";
import * as types from './action-types';

export const login = (status) => {
    return {
        type: types.LOG_IN,
        status: status
    };
};
