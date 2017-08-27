import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styles from "../utils/styles";
import * as API from "../utils/api";
import * as Actions from "../actions/index";
import { connect } from "react-redux";
import * as Constants from "../utils/constants";

class Posts extends Component {
    static filterPosts(posts, displayDeleted) {
        if (!displayDeleted && posts) {
            return posts.filter((post) => (!post.deleted));
        } else {
            return posts || [];
        }
    }

    render() {
        const {posts, displayDeleted, displayCategory, sortMode} = this.props;

        return (
            <div className="mt-2">
                <div>
                    <h6>Sort by:</h6>
                    <a href="#score" className="badge badge-primary mr-2" onClick={
                        () => {
                            this.props.sortPosts(Constants.SORT_BY_SCORE);
                            return false
                        }
                    }>Score</a>
                    <a href="#newest" className="badge badge-primary" onClick={
                        () => {
                            this.props.sortPosts(Constants.SORT_BY_NEWEST);
                            return false
                        }
                    }>Newest</a>
                </div>

                <div className="list-group mt-2">
                    {
                        Posts.filterPosts(posts, displayDeleted || false).sort((p1, p2) => {
                            switch (sortMode) {
                                case Constants.SORT_BY_SCORE:
                                default:
                                    return p1.voteScore < p2.voteScore ? 1 : -1;
                                case Constants.SORT_BY_NEWEST:
                                    return p1.timestamp < p2.timestamp ? 1 : -1;
                            }
                        }).map((post) => (

                            <div key={post.id} className="list-group-item">

                                <div className="row valign-wrapper">
                                    <div
                                        className="col-sm-4 col-md-2 d-flex flex-column  text-truncate">
                                        <a style={{...Styles.mainText}} className="d-flex align-self-center"
                                           href="#up"
                                           onClick={
                                               () => {
                                                   API.votePost(post.id, true).then((post) => {
                                                       this.props.votePost(post.id, post.voteScore);
                                                   });

                                                   return false
                                               }
                                           }
                                        >
                                            <i className="material-icons">keyboard_arrow_up</i>
                                        </a>
                                        <p className="mb-0 text-truncate"
                                           style={{...Styles.mainText, ...Styles.centeredText}}>{post.voteScore}</p>
                                        <a style={{...Styles.mainText}} className="d-flex align-self-center"
                                           href="#down"
                                           onClick={
                                               () => {
                                                   API.votePost(post.id, false).then((post) => {
                                                       this.props.votePost(post.id, post.voteScore);

                                                   });

                                                   return false
                                               }
                                           }
                                        >
                                            <i className="material-icons">keyboard_arrow_down</i>
                                        </a>
                                    </div>

                                    <div className="col" style={{...Styles.mainText}}>
                                        <h5>
                                            <a style={{...Styles.mainText}}
                                               className={`row truncate left-align blue-grey-text text-lighten-1`}
                                               href={"/post/" + post.id}>
                                                {post.title}
                                            </a>
                                        </h5>
                                        <h6 className="row truncate left-align">
                                            {
                                                displayCategory ?
                                                    (<span>By<a href="#!">{` ${post.author} `}</a>at
                                                    <a href={`/r/${post.category}`}
                                                       style={{...Styles.capitalize}}>{` ${post.category}`}</a>
                                                    </span>) :
                                                    (<span>By
                                            <a href="#!">{` ${post.author}`}</a>
                                        </span>)
                                            }

                                        </h6>

                                        <h6 className="row text-muted">{`${new Date(post.timestamp)}`}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool,
    displayCategory: PropTypes.bool
};

function mapStateToProps({posts}) {
    return {
        sortMode: posts.sortMode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, votes) => dispatch(Actions.votePost(id, votes)),
        sortPosts: (sortMode) => dispatch(Actions.sortPosts(sortMode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
