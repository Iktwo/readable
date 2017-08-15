export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const UPDATE_POSTS = 'UPDATE_POSTS';

export function updateCategories(categories) {
    return {
        type: UPDATE_CATEGORIES,
        categories
    }
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}
