import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import HeaderNav from "../HeaderNav";

class PostPage extends Component {
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

                {post ? (<div className="container mt-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">By<a href="#!">{` ${post.author}`}</a></h6>
                            <p className="card-text">{post.body}</p>
                            <p className="card-text">
                                <small className="text-muted">{`${new Date(post.timestamp).toString()}`}</small>
                            </p>
                        </div>
                    </div>
                </div>) : (<div/>)}

            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts: posts.posts
    }
}

export default withRouter(connect(mapStateToProps, null)(PostPage));
