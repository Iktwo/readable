import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {

    render() {
        const {comments, sortMode} = this.props;

        return (
            <div className="mt-2">
                Comments
            </div>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    sortMode: PropTypes.string.isRequired
};

export default Comments;
