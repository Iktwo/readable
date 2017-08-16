export const CATEGORIES_UPDATE = 'CATEGORIES_UPDATE';
export const POSTS_UPDATE = 'POSTS_UPDATE';
export const POSTS_VOTE = 'POSTS_VOTE';
export const POSTS_DELETE = 'POSTS_DELETE';

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

export function votePost(vote, postId) {
    return {
        type: POSTS_VOTE,
        vote,
        postId
    }
}

export function deletePost(postId) {
    return {
        type: POSTS_DELETE,
        postId
    }
}
