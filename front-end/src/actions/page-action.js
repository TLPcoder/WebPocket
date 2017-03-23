"use strict";
import * as types from './action-types';

export const page = (page) => {
    return {
        type:types.CHAGNE_PAGE,
        page:page
    };
};
