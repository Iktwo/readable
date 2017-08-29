import React, { Component } from 'react';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";

class EditCommentPage extends Component {
    // submitForm = (data) => {
    //     const {id} = this.props.match.params;
    //     const {posts} = this.props;
    //
    //     let post = posts.filter((p) => {
    //         return p.id === id
    //     });
    //
    //     if (post.length === 1) {
    //         post = post[0];
    //     } else {
    //         post = null;
    //     }
    //
    //     if (post) {
    //         API.editPost(post.id, {
    //             title: data.title,
    //             body: data.body
    //         }).then((post) => {
    //             this.props.editPost(post);
    //             this.props.history.push(`/post/${post.id}`)
    //         }).catch((e) => {
    //             console.error("Error editing post: ", e)
    //         });
    //     }
    // };

    render() {
        const {id} = this.props.match.params;
        const {comments} = this.props;

        let comment = null;

        for (let k in comments) {
            if (comments.hasOwnProperty(k)) {
                console.log("????", comments[k])
                comment = comments[k].filter((c) => {
                    return c.id === id
                });
            }
        }

        if (comment && comment.length === 1) {
            comment = comment[0];
        } else {
            comment = null;
        }

        console.log("??? comment:", comment)

        return (
            <div>
                <HeaderNav title="Editing comment"/>

                {(comment) ? (
                    <div className="container mt-2">
                        <form onSubmit={(e) => {
                            e.preventDefault();

                            // onSubmitForm({
                            //     body: this.body.value,
                            //     author: this.author.value || 'Anon'
                            // })
                        }}>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body"
                                          placeholder="Content" rows={3}
                                          defaultValue={comment.body}
                                          required
                                          ref={(body) => this.body = body}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" placeholder="Author"
                                       defaultValue={comment.author}
                                       ref={(author) => this.author = author}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add comment</button>
                        </form>
                    </div>
                ) : (<div/>)}
            </div>
        );
    }
}

function mapStateToProps({comments}) {
    return {
        comments: comments.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editComment: (comment) => dispatch(Actions.editComment(comment)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentPage));
