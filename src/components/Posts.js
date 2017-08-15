import React, {Component} from 'react';
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
            <div className="collection">
                {
                    Posts.filterPosts(this.props.posts, this.props.displayDeleted || false).map((post) => (
                        <a key={post.id} href="#!" className="collection-item">{post.title}</a>
                    ))
                }
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool
};

export default Posts;
