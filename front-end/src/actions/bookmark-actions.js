'use strict';
import * as types from './action-types';
import axios from 'axios'
export const bookmarks = (data) => {
    return {
        type: types.BOOKMARK_DATA,
        data: data
    };
};
