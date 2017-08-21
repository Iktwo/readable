export const CATEGORIES_UPDATE = 'CATEGORIES_UPDATE';
export const POSTS_UPDATE = 'POSTS_UPDATE';
export const POSTS_VOTE = 'POSTS_VOTE';
export const POSTS_DELETE = 'POSTS_DELETE';
export const POSTS_SORT = 'POSTS_SORT';
export const POSTS_ADD = 'POSTS_ADD';
export const POSTS_FORM_REDIRECT = 'POSTS_FORM_REDIRECT';

export function updateCategories(categories) {
    return {
        type: CATEGORIES_UPDATE,
        categories
    }
}

export function updatePosts(posts) {
    return {
        type: POSTS_UPDATE,
        posts
    }
}

export function votePost(id, votes) {
    return {
        type: POSTS_VOTE,
        votes,
        id
    }
}

export function deletePost(id) {
    return {
        type: POSTS_DELETE,
        id
    }
}

export function sortPosts(sortMode) {
    return {
        type: POSTS_SORT,
        sortMode
    }
}

export function addPost(post) {
    return {
        type: POSTS_ADD,
        post
    }
}

export function postFormRedirect(enabled) {
    return {
        type: POSTS_FORM_REDIRECT,
        enabled
    }
}
