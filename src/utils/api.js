const Authorization = process.env.AUTHORIZATION_TOKEN || "some_token";

const ENDPOINT = process.env.ENDPOINT || "https://readableapi.iktwo.com";

const headers = new Headers({
    Authorization
});

export function fetchCategories() {
    return fetch(`${ENDPOINT}/categories`, {method: 'GET', headers})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
        .then((json) => json.categories)
}

export function fetchPosts() {
    return fetch(`${ENDPOINT}/posts`, {method: 'GET', headers})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function votePost(postId, vote) {
    return fetch(`${ENDPOINT}/posts/${postId}`, {
        method: 'POST',
        headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({option: vote ? 'upVote' : 'downVote'})
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}