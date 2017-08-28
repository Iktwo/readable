import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import HeaderNav from "../HeaderNav";
import * as Styles from "../../utils/styles";
import * as Actions from "../../actions";
import * as API from "../../utils/api";
import Comments from "../Comments";
import * as constants from "../../utils/constants";

class PostPage extends Component {
    componentWillMount() {
        const {posts} = this.props;

        const {id} = this.props.match.params;

        let post = posts.filter((p) => {
            return p.id === id
        });

        if (post.length === 1) {
            post = post[0];
        } else {
            post = null;
        }

        if (post) {
            // API.fetchComments(post.id).then((comments) => {
            //     if (comments !== post.comments) {
            //         this.props.updateComments(comments, post.id);
            //     }
            // });
        }
    }

    render() {
        const {posts} = this.props;

        const {id} = this.props.match.params;

        let post = posts.filter((p) => {
            return p.id === id
        });

        if (post.length === 1) {
            post = post[0];
        } else {
            post = null;
        }

        return (
            <div>
                <HeaderNav
                    title={post && !post.deleted ? `${post.category}` : `Could not find post`}/>

                {post ? (<div className="container mt-2 ">

                    <div className="row">
                        <div className="col-sm-4 col-md-2 d-flex flex-column text-truncate align-self-center">
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

                        <div className="card col-sm-8 col-md-10">
                            <div className="card-body">
                                <h4 className="card-title">{post.title}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">By<a href="#!">{` ${post.author}`}</a>
                                </h6>
                                <p className="card-text">{post.body}</p>
                                <p className="card-text">
                                    <small className="text-muted">{`${new Date(post.timestamp).toString()}`}</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-2" style={{...Styles.mainText, ...Styles.centeredText}}>
                        <a className="btn btn-warning" href={`/newpost/`}>
                            Edit
                        </a>
                        <a className="btn btn-danger ml-2" href={`/newpost/`}>
                            Delete
                        </a>
                    </div>

                    <Comments comments={post.comments || []}
                              sortMode={this.props.commentsSortMode || constants.SORT_BY_SCORE}/>
                </div>) : (<div/>)}

            </div>
        );
    }
}

PostPage.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool,
    displayCategory: PropTypes.bool
};

function mapStateToProps({posts}) {
    return {
        posts: posts.posts,
        commentsSortMode: posts.commentsSortMode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, votes) => dispatch(Actions.votePost(id, votes)),
        updateComments: (comments, postId) => dispatch(Actions.updateComments(comments, postId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
