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

        case Actions.POSTS_EDIT: {
            const {post} = action;

            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id === post.id) {
                        p = post;
                    }

                    return p;
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

        default:
            return state;
    }
}

function comments(state = {comments: {}, sortMode: Constants.SORT_BY_SCORE, allComments: []}, action) {
    switch (action.type) {
        case Actions.COMMENTS_UPDATE: {
            const {comments, postId} = action;

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [postId]: comments
                }
            };
        }

        case Actions.COMMENTS_VOTE: {
            const {id, votes, postId} = action;

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [postId]: state.comments[postId].map((comment) => {
                        if (comment.id === id) {
                            comment.voteScore = votes
                        }

                        return comment
                    })
                }
            };
        }

        case Actions.COMMENTS_SORT: {
            const {sortMode} = action;

            return {
                ...state,
                sortMode
            };
        }

        case Actions.COMMENTS_DELETE: {
            const {id, parentId} = action;

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [parentId]: state.comments[parentId].filter((comment) => {
                        return comment.id !== id
                    })
                }
            }
        }

        case Actions.COMMENTS_EDIT: {
            const {comment} = action;

            return {
                ...state,
                [comment.parentId]: state.comments[comment.parentId].map((c) => {
                    if (comment.id === c.id) {
                        c = comment;
                    }

                    return c
                })
            }
        }

        default:
            return state;
    }
}

export default combineReducers({
    categories,
    posts,
    comments
})