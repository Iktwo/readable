import { combineReducers } from 'redux'

import * as Actions from '../actions'

function categories(state = {categories: []}, action) {
    switch (action.type) {
        case Actions.CATEGORIES_UPDATE:
            const {categories} = action;

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
        case Actions.POSTS_UPDATE:
            const {posts} = action;

            return {
                ...state,
                posts
            };

        case Actions.POSTS_DELETE:
            const {postId} = action;

            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === postId) {
                        post.deleted = true;
                    }

                    return post;
                })
            };

        case Actions.POSTS_VOTE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default combineReducers({
    categories,
    posts
})