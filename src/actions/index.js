export const CATEGORIES_UPDATE = 'CATEGORIES_UPDATE';
export const POSTS_UPDATE = 'POSTS_UPDATE';
export const POSTS_VOTE = 'POSTS_VOTE';
export const POSTS_DELETE = 'POSTS_DELETE';
export const POSTS_SORT = 'POSTS_SORT';
export const POSTS_ADD = 'POSTS_ADD';
export const POSTS_EDIT = 'POSTS_EDIT';
export const POSTS_FORM_REDIRECT = 'POSTS_FORM_REDIRECT';
export const COMMENTS_UPDATE = 'COMMENTS_UPDATE';
export const COMMENTS_SORT = 'COMMENTS_SORT';

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

export function updateComments(comments, postId) {
    return {
        type: COMMENTS_UPDATE,
        comments,
        postId
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

export function sortComments(sortMode) {
    return {
        type: COMMENTS_SORT,
        sortMode
    }
}

export function addPost(post) {
    return {
        type: POSTS_ADD,
        post
    }
}

export function editPost(post) {
    return {
        type: POSTS_EDIT,
        post
    }
}

export function postFormRedirect(enabled) {
    return {
        type: POSTS_FORM_REDIRECT,
        enabled
    }
}
