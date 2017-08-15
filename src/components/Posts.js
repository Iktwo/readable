import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
    static filterPosts(posts, displayDeleted) {
        if (!displayDeleted) {
            return posts.filter((post) => (!post.deleted));
        } else {
            return posts;
        }
    }

    render() {
        return (
            <ul className="categories-list">
                {Posts.filterPosts(this.props.posts, this.props.displayDeleted || false).map((post) => (<li key={post.id}>{post.title}</li>))}
            </ul>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool
};

export default Posts;
