import { combineReducers } from 'redux'
import * as Actions from '../actions'
import * as Constants from "../utils/constants";

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

function posts(state = {posts: [], sortMode: Constants.SORT_BY_SCORE}, action) {
    switch (action.type) {
        case Actions.POSTS_UPDATE: {
            const {posts} = action;

            return {
                ...state,
                posts
            };
        }

        case Actions.POSTS_DELETE: {
            const {id} = action;

            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        post.deleted = true;
                    }

                    return post;
                })
            };
        }

        case Actions.POSTS_VOTE: {
            const {id, votes} = action;

            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        post.voteScore = votes;
                    }

                    return post;
                })
            };
        }

        case Actions.POSTS_SORT: {
            const {sortMode} = action;

            return {
                ...state,
                sortMode
            };
        }

        case Actions.POSTS_ADD: {
            const {post} = action;

            return {
                ...state,
                posts: state.posts.concat(post)
            };
        }

        case Actions.POSTS_FORM_REDIRECT: {
            const {enabled} = action;

            return {
                ...state,
                redirectPostsForm: enabled
            };
        }

        case Actions.COMMENTS_UPDATE: {
            const {comments, postId} = action;
            console.log(comments, postId)

            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === postId) {
                        post.comments = comments;
                    }

                    return post;
                })
            };
        }

        default:
            return state;
    }
}

export default combineReducers({
    categories,
    posts
})