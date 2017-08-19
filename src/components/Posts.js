import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styles from "../utils/styles";

class Posts extends Component {
    static filterPosts(posts, displayDeleted) {
        if (!displayDeleted) {
            return posts.filter((post) => (!post.deleted));
        } else {
            return posts;
        }
    }

    render() {
        const { posts, displayDeleted, displayCategory} = this.props;

        return (
            <div className="list-group mt-2">
                {
                    Posts.filterPosts(posts, displayDeleted || false).map((post) => (

                        <div key={post.id} className="list-group-item">

                            <div className="row valign-wrapper">
                                <div
                                    className="col-sm-4 col-md-2 d-flex flex-column  text-truncate">
                                    <a style={{...Styles.mainText}} className="d-flex align-self-center"
                                       href="#up">
                                        <i className="material-icons">keyboard_arrow_up</i>
                                    </a>
                                    <p className="mb-0 text-truncate"
                                       style={{...Styles.mainText, ...Styles.centeredText}}>{post.voteScore}</p>
                                    <a style={{...Styles.mainText, ...Styles.noDecorationText}} className="d-flex align-self-center" href="#down">
                                        <i className="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </div>

                                <div className="col s8" style={{...Styles.mainText}}>
                                    <h5>
                                        <a style={{...Styles.mainText}}
                                           className={`row truncate left-align blue-grey-text text-lighten-1`}
                                           href="#!">
                                            {post.title}
                                        </a>
                                    </h5>
                                    <h6 className="row truncate left-align">
                                        {
                                            displayCategory ?
                                                (<span>By
                                            <a href="#!">{` ${post.author} `}</a>
                                            at
                                            <a href={`/r/${post.category}`}
                                               style={{...Styles.capitalize}}>{` ${post.category}`}</a>
                                        </span>) :
                                                (<span>By
                                            <a href="#!">{` ${post.author}`}</a>
                                        </span>)
                                        }

                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool,
    displayCategory: PropTypes.bool
};

export default Posts;
