import { combineReducers } from 'redux'

import * as Actions from '../actions'

function categories(state = {categories: []}, action) {
    switch (action.type) {
        case Actions.UPDATE_CATEGORIES:
            const { categories } = action;

            return {
                ...state,
                categories
            };

        default:
            return state;
    }
}

function posts(state = {posts: []}, action) {
    switch (action.type) {
        case Actions.UPDATE_POSTS:
            const { posts } = action;

            return {
                ...state,
                posts
            };

        default:
            return state;
    }
}

export default combineReducers({
    categories,
    posts
})